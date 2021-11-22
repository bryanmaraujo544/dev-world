const { Router } = require('express');
const jwtAuth = require('./app/middlewares/jwtAuth');
const AuthController = require('./app/controllers/AuthController');
const UserController = require('./app/controllers/UserController');
const FavUserController = require('./app/controllers/FavUserController');
const router = Router();

router.get('/users', jwtAuth, UserController.index);
router.post('/users', UserController.store);

router.get('/auth', jwtAuth, (req, res) => {
  const auth = req.auth;
  res.json({ message:'valid-token', auth });
});
router.get('/auth/profile', AuthController.show);
router.post('/auth/login', AuthController.login);

router.get('/fav-users', FavUserController.index);
router.get('/fav-user/:favuserUsername', jwtAuth, FavUserController.show);
router.get('/fav-users/:userId', FavUserController.showFavoritesUsers);
router.delete('/fav-users/:id', FavUserController.delete);
router.post('/fav-users', jwtAuth, FavUserController.store);


module.exports = router;