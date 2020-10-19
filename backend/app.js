const express = require('express');
const userRouter = require('./routes/userRouter');
const cors = require('cors');

//Creating Express application object:
const app = express();

//Use Json middleware:
app.use(express.json());
//Allowing CORS policy:
app.use(cors(3000));


//Attaching Main Routes:
app.use('/api/users/', userRouter);

module.exports = app;