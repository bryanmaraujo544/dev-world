const jwt = require('jsonwebtoken');

function createToken({ id, name, github_username }) {
  const token = jwt.sign(
    { id, name, githubUsername: github_username }, 
    process.env.JWT_SECRET,
    { expiresIn: '72h' }
  );
  
  return token;
}

module.exports = createToken;