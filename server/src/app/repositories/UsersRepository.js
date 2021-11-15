const db = require('../../database');
const bcrypt = require('bcrypt');

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
    const encryptedPassword = await bcrypt.hash(password, 10);
    
    const userCreated = await db.query(`
      INSERT INTO users(name, github_username, email, password)
      VALUES (?, ?, ?, ?);
    `, [name, github_username, email, encryptedPassword]);

    return userCreated;
  }

  async findByGithubUsername(username) {
    const [user] = await db.query(`
      SELECT * FROM users
      WHERE github_username = ?
    `, [username]);
    
    return user;
  }

  async findByEmail(email) {
    const [user] = await db.query(`
      SELECT * FROM users
      WHERE email = ?
    `, [email]);

    return user;
  }
};

module.exports = new UsersRepository;