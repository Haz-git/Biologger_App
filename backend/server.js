const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Using dotenv for env variables:
dotenv.config({
    path: `${__dirname}/config.env`
});

//Grabbing Express Application: 
const app = require('./app.js');

//Connecting app to MongoDB via Mongoose:

mongoose
    .connect(process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`Biologger App on port: ${process.env.PORT} has been connected to MongoDB Atlas`);
    })

//Server Start:
app.listen(process.env.PORT, () => {
    console.log(`The server is online and listening on port: ${process.env.PORT}`);
})

