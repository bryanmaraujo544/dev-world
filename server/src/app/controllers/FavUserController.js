const { findByUsername, findByUserId } = require('../repositories/FavUsersRepository');
const FavUsersRepository = require('../repositories/FavUsersRepository');

class FavUserController {
  async index(req, res) {
    const favUsers = await FavUsersRepository.findAll();
    res.send(favUsers);
  }

  async show(req, res) {
    const { favuserUsername } = req.params;
    const { id } = req?.token;

    // grabbing all of the favorited users from user with the current id
    const favusers = await findByUserId(id);

    // catching the favuser wich contains the username sended through params
    const [favuser] = favusers.filter((favuser) => favuser.favuser_username === favuserUsername);
    
    if (!favuser) {
      return res.json({ message: 'this user is not a favorited user ', favuser: null });
    }

    res.json({ message: 'this user is favorited', favuser });
  }

  async showFavoritesUsers(req, res) {
    const { userId } = req.params;
    
    const favUsers = await FavUsersRepository.findByUserId(userId);

    if (favUsers.length === 0){
      return res.json({ message: 'this user does not has any favorited user', favUsers });
    }
    res.send(favUsers);
  }

  async store(req, res) {
    const { favuserUsername } = req.body;
    console.log({ favuserUsername });
    const { id } = req?.token;

    const alreadyExists = await FavUsersRepository.findByUsername(favuserUsername);
    if (alreadyExists) {
      return res.status(400).json({ message: 'The user already exists', user: null })
    }

    const [user] = await FavUsersRepository.create({ favuserUsername, userId: id });
    console.log({ user });
    res.json({ message: 'user created', user });
  }

  async delete(req, res) {
    const { id } = req.params;

    await FavUsersRepository.delete(id);
    res.send({ message: 'User deleted!' });
  }
}

module.exports = new FavUserController;