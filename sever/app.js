const express = require('express');
const dotenv = require('dotenv');

const app = express();
const cors = require('cors');
// data base connection
const db = require('./config/connection');
const homeRouter = require('./router/home');
const clientRouter = require('./router/client');
// .env config
dotenv.config();
// react cros config
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redirects to roughts
app.use('/api', homeRouter);
app.use('/api/client', clientRouter);

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log('Datebase Connected to port 27017');
});
app.listen(3001, () => {
  console.log('sever started running on localhost:3001');
});
