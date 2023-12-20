require('dotenv').config();

const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.NODE_ENV === 'test' ? 0 : process.env.PORT || 8080;

// connect to MongoDB database
require('./db')();

// configure routes
app.use('/accounts', require('./routes/accounts'));
app.use('/plaid', require('./routes/plaid'));

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

const server = app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}...`);
});

module.exports = server;
