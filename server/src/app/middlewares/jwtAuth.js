const jwt = require('jsonwebtoken');

function jwtAuth (req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: 'there is no token', auth: false });
  }

  const token = authorization?.split(' ')[1];

  try {
    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ isTokenValid });
    if (isTokenValid) {
      res.json({ message: 'valid token', auth: true });
      return next();
    } else {
      res.json({ message: 'invalid-token', auth: false });
    }
  } catch (err) {
    res.status(400).json({ message: 'invalid-token', auth: false });
    console.log({ err });
  }
}

module.exports = jwtAuth;