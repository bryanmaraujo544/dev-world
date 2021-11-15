const { Router } = require('express');
const LoginController = require('./app/controllers/LoginController');
const UserController = require('./app/controllers/UserController');
const router = Router();

router.get('/users', UserController.index);
router.post('/users', UserController.store);

router.post('/login', LoginController.index);


module.exports = router;