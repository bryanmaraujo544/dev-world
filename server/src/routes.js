const { Router } = require('express');
const jwtAuth = require('./app/middlewares/jwtAuth');
const AuthController = require('./app/controllers/AuthController');
const UserController = require('./app/controllers/UserController');
const FavUserController = require('./app/controllers/FavUserController');
const router = Router();

router.get('/users', jwtAuth, UserController.index);
router.post('/users', UserController.store);

router.get('/auth', jwtAuth);
router.get('/auth/profile', AuthController.show);
router.post('/auth/login', AuthController.login);

router.get('/fav-users', FavUserController.index);
router.get('/fav-users/:userId', FavUserController.showFavoritesUsers);


module.exports = router;