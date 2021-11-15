class AuthController {
  login(req, res) {
    const { email, password } = req.body;

    // Check if there is some user with this email
    // If there is, I need to compare this password with the encrypted password
    // If everything is correct, I create a jwt with the information and send to front end
    res.send({ email, password });
  }
}

module.exports = new AuthController;