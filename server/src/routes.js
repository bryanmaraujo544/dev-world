const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const router = Router();

router.get('/users', UserController.index);
router.post('/users', UserController.store);


module.exports = router;