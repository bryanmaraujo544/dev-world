const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const router = Router();
const mysql = require('mysql');

const client = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'devworld'
});

router.get('/users', UserController.index);
router.get('/test', (req, res) => {
  client.query('SELECT * FROM users', (err, result) => {
    res.send(result);
  })
});

module.exports = router;