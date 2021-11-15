const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    const users = await UsersRepository.findAll();
    res.json(users);
  }

  async store(req, res) {
    const { name, githubUsername, email, password } = req.body;
    console.log(name, githubUsername, email, password);

    const githubUsernameExists = await UsersRepository.findByGithubUsername(githubUsername);
    const emailExists = await UsersRepository.findByEmail(email);

    if (githubUsernameExists || emailExists) {
      return res.status(400).json({ error: 'This githubUsername or email already exists' });
    }

    const user = await UsersRepository.create({ name, github_username: githubUsername, email, password });

    if (!user) {
      return res.json({ message: "User hasn't been created" });
    }

    res.json({ message: "User created" });
  }


};

module.exports = new UserController;