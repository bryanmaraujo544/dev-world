const { Router } = require('express');
const jwtAuth = require('./app/middlewares/jwtAuth');
const AuthController = require('./app/controllers/AuthController');
const UserController = require('./app/controllers/UserController');
const router = Router();

router.get('/users', jwtAuth, UserController.index);
router.post('/users', UserController.store);

router.get('/auth/profile', AuthController.show);
router.post('/auth/login', AuthController.login);


module.exports = router;