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
    const passwordEncrypted = user.password;
    const isPasswordCorrect = await bcrypt.compare(password, passwordEncrypted);
    
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
}

module.exports = new AuthController;