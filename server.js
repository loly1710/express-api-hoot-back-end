const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');
const hootsRouter = require('./controllers/hoots.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(cors());
app.use(express.json());

// Routes go here
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);
app.use('/hoots', hootsRouter);

app.listen(3000, () => {
    console.log('The express app is ready!');
});























/*require("dotenv").config();

require("./config/database");
const express = require("express");
const morgan = require("morgan");
const verifyToken = require("./middleware/verify-token");

// ... other requires above
const testJWTRouter = require("./controllers/test-jwt");
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// ... other middleware

// Routes go here
// Public Routes
app.use("/test-jwt", testJWTRouter);
app.use("/users", usersRouter);

// Protected Routes
app.use(verifyToken);
app.use("/profiles", profilesRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});*/
