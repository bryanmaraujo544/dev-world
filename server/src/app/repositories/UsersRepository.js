const db = require('../../database');

class UsersRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * 
      FROM users
    `);
    
    return rows;
  }
};

module.exports = new UsersRepository;