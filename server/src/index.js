const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
  console.log("It occurred some error: ", { error });
  res.sendStatus(500);
});

app.listen(3001, console.log('🔥 Server started at port 3001'));