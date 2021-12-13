const db = require('../../database');
const axios = require('axios');

class AuthRepository {
  async findByEmail(email) {
    const [user] = await db.query(`
      SELECT * FROM users
      WHERE email = ?
    `, [email]);

    return user;
  }

  async findByUsername(username) {
    const [user] = await db.query(`
      SELECT *
      FROM users
      WHERE github_username = ?
    `, [username]);

    return user;
  }
  
  async getGithubUser(code) {
    const url = 'https://github.com/login/oauth/access_token';

    
    const { data } = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }, 
      headers: {
        "Accept": "application/json"
      }
    });

    console.log('data from github access token', data);
    const { data: GHUser } = await axios.get('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${data.access_token}`
      }
    });
    console.log(GHUser);

    const { login, name } = GHUser;
    return { login, name };

    // TODO, GRAP USER INFO;
  }

  async create({ name, github_username, email, password }){
    await db.query(`
    INSERT INTO users(name, github_username, email, password)
    VALUES (?, ?, ?, ?);
  `, [name, github_username, email, password]);

    const user = await db.query(`
      SELECT *
      FROM users
      WHERE github_username = ?
    `, [github_username]);

    return user;
  }
}

module.exports = new AuthRepository;