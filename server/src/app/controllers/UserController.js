const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    const users = await UsersRepository.findAll();
    res.json(users);
  }

  async store(req, res) {
    const { name, github_username, email, password } = req.body;

    const userExists = await UsersRepository.findByGithubUsername(github_username);

    if (userExists) {
      return res.status(400).json({ error: 'This email already exists' });
    }
    
    const user = await UsersRepository.create({ name, github_username, email, password });
    res.json(user);

  }


};

module.exports = new UserController