const db = require('../../database/index');

class FavUsersRepository {
  async findAll() {
    const sql = "SELECT * FROM favorited_users";
    const row = await db.query(sql);
    return row;
  }

  async findByUserId(userId) {
    const sql = `
      SELECT favorited_users.*, users.name
      FROM favorited_users
      WHERE users_id = ?
    `;
    const favUsers = await db.query(sql, [userId]);
    return favUsers;

    
  }
}

module.exports = new FavUsersRepository;