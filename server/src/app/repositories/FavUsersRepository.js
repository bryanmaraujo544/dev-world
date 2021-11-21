const db = require('../../database/index');

class FavUsersRepository {
  async findAll() {
    const sql = "SELECT * FROM favorited_users";
    const row = await db.query(sql);
    return row;
  }

  async findByUserId(userId) {
    const sql = `
      SELECT u.id AS 'user_id', u.github_username AS 'user_username',
      fav.id AS 'favuser_id', fav.github_username AS 'favuser_username'
      FROM users AS u
      INNER JOIN favorited_users AS fav
      ON u.id = fav.user_id
      WHERE u.id = ?;
    `;
    const favUsers = await db.query(sql, [userId]);
    return favUsers;
  }

  async delete(id) {
    const sql = "DELETE FROM favorited_users WHERE id = ?";
    await db.query(sql, [id]);
  }
}

module.exports = new FavUsersRepository;