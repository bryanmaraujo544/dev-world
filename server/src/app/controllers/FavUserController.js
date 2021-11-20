const FavUsersRepository = require('../repositories/FavUsersRepository');

class FavUserController {
  async index(req, res) {
    const favUsers = await FavUsersRepository.findAll();
    res.send(favUsers);
  }

  async showUsersFavorites(req, res) {
    const { userId } = req.params;

    const favUsers = await FavUsersRepository.findByUserId(userId);

    if (favUsers.length === 0){
      return res.status(400).json({ message: 'this user does not has any favorited user', favUsers });
    }

    res.send(favUsers);
  }
}

module.exports = new FavUserController;