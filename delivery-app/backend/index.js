const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


mongoDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/displayData'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
