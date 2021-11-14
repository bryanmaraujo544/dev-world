const db = require('../../database');

class UsersRepository {
  async findAll() {
    const users = await db.query('SELECT * FROM users');
    return users;
  }

  async create({
    name,
    github_username,
    email,
    password
  }) {
    const userCreated = await db.query(`
      INSERT INTO users(name, github_username, email, password)
      VALUES (?, ?, ?, ?);
    `, [name, github_username, email, password]);

    return userCreated;
  }

  async findByGithubUsername(username) {
    const [user] = await db.query(`
      SELECT * FROM users
      WHERE github_username = ?
    `, [username]);
    
    return user;
  }
};

module.exports = new UsersRepository;