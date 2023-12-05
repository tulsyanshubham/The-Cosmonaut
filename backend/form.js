const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors')
// const { body } = require("express-validator");
const router = express.Router();
const Model = require("./model");



const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())

app.use('/submit', require('./post'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

