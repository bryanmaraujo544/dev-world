const AuthRepository = require('../repositories/AuthRepository');
const bcrypt = require('bcrypt');
const createToken = require('../utils/createToken');

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    // Check if there is some user with this email
    const user = await AuthRepository.findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "It doesn't exists a user with this email" });
    }

    const passwordEncrypted = user.password;
    const isPasswordCorrect = await bcrypt.compare(password, passwordEncrypted);
    
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    createToken();
    res.send("Everything okay, let's to the next step");



    // If everything is correct, I create a jwt with the information and send to front end
  }
}

module.exports = new AuthController;