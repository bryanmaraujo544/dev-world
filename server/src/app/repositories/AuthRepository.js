const db = require('../../database');

class AuthRepository {
  async findByEmail(email) {
    const [user] = await db.query(`
      SELECT * FROM users
      WHERE email = ?
    `, [email]);

    return user;
  }
}

module.exports = new AuthRepository;