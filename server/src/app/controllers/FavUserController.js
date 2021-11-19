const FavUsersRepository = require('../repositories/FavUsersRepository');

class FavUserController {
  async index(req, res) {
    const favUsers = await FavUsersRepository.findAll();
    res.send(favUsers);
  }

  async showUsersFavorites(req, res) {
    const { id } = req.params;
    console.log('oi');
    // console.log({ userId });

    // const favUsers = await FavUsersRepository.findByUserId(userId);
    // res.send(favUsers);
  }
}

module.exports = new FavUserController;