const express = require("express");
const mongoose = require("mongoose");
const port = 9000;

const dotenv = require('dotenv').config();
const url = process.env.DB_URL

const app = express();

mongoose.connect(url, {useNewUrlParser : true});
const conn = mongoose.connection;

conn.on('open', () => {
    console.log('Connected to MongoDB !');
})

app.use(express.json());

const programmerRouter = require('./routes/programmers');
app.use('/programmers', programmerRouter);

app.listen(port, () => {
    console.log('Server has been started');
})