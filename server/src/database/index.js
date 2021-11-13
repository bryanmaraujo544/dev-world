const mysql = require('mysql');

const client = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'devworld'
});


exports.query = async (query, values = []) => {
  try {
    const result = await new Promise((resolve, reject) => {
      client.query(query, values, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
    return result;
  } catch (err) {
    console.log("This error has happened: ", err);
  }

}

