const jwt = require('jsonwebtoken');

function createToken({ name, github_username }) {
  const token = jwt.sign({ name, githubUsername: github_username }, process.env.JWT_SECRET);
  return token;
}

module.exports = createToken;