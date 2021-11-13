const db = require('../../database');

class UsersRepository {
  async findAll() {
    const users = await db.query('SELECT * FROM users');
    return users;
  }

  async findByUsername(username) {
  
  }
};

module.exports = new UsersRepository;