const AuthRepository = require('../repositories/AuthRepository');
const bcrypt = require('bcrypt');
const createToken = require('../utils/createToken');
const jwt = require('jsonwebtoken');


class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    console.log(email, password);

    // Check if there is some user with this email
    const user = await AuthRepository.findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "It doesn't exists a user with this email", token: null });
    }

    // Grabbing the password of the user that is encrypted from the database
    const passwordHashed = user.password;
    const isPasswordCorrect = await bcrypt.compare(password, passwordHashed);
    
    // If the password given by user is different from the password of the user with the email provided...
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect password", token: null });
    }

    const token = createToken(user);
    res.send({ message: "User logged-in", token });
  }

  async show(req, res) {
    const { authorization } = req.headers;

    const token = authorization.split(' ')[1];
    console.log({ token });

    const userInfos = jwt.decode(token);
    console.log({ userInfos });

  }

  async signInWithGithub(req, res) {
    const { code } = req.body;
    console.log({ code });

    if (!code) {
      console.log('NO CODE');
      return res.json({ message: 'No code ', token: null});
    }

    try {
      // Grabbing github user's information based on the code received from frontend
      // This code was received by github auth page
      const result = await AuthRepository.getGithubUser(code); 

      // Checking if database contains a user using the username received from github infos
      const user = await AuthRepository.findByUsername(result.login);

      // If there is no username in the db with this username, we create one and create the token based on it
      // Because we need the id of user in database to make other verifications later
      if (!user) {
        const userCreated = await AuthRepository.create({ name: result.name, github_username: result.login, email: '', password: '' });
        const token = createToken(userCreated);

        return res.json({ message: 'User logged id', token });
      }

      const token = createToken(user);
      console.log({ token });
      return res.json({ message: 'User logged in', token });
    } catch (err) {
      return res.json({ token: null });
    }
  }
  
}

module.exports = new AuthController;