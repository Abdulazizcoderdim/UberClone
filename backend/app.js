require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./db/db');
const cookieParser = require('cookie-parser');

// Connect to MongoDB
connectToDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/captains', require('./routes/captain.routes'));

module.exports = app;
