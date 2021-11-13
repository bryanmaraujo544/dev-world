const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    console.log('user');
    
    const users = await UsersRepository.findAll();
  
    res.json(users);
  }

};

module.exports = new UserController