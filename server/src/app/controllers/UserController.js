const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    const users = await UsersRepository.findAll();
    res.json(users);
  }

  async store(req, res) {
    const { name, githubUsername, email, password } = req.body;
    console.log(name, githubUsername, email, password);

    const userExists = await UsersRepository.findByGithubUsername(githubUsername);

    if (userExists) {
      return res.status(400).json({ error: 'This email already exists' });
    }

    const user = await UsersRepository.create({ name, github_username: githubUsername, email, password });
    res.json({ message: "User created" });
  }


};

module.exports = new UserController