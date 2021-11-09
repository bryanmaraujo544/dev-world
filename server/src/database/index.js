const mysql = require('mysql');

const client = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'devworld'
});

// module.exports = client;
exports.query = async (query, values) => {
  let result = {err: null, res: []};
  client.query(query, values, (err, res) => {
    if (err) result.err = err;
    else result.res = res;
  });
  return result;
}
