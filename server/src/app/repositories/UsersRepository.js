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

  async createWithGithub(code) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data } = await axiox.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }, 
      headers: {
        "Accept": "application/json"
      }
    });
    console.log({ data })
  }
};

module.exports = new UsersRepository;