const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Using dotenv for env variables:
dotenv.config({
    path: `${__dirname}/config.env`
});

//Grabbing Express Application: 
const app = require('./app.js');

//Creating Connection to Socket.IO ?
const server = require('http').createServer(app);
const io = require('socket.io')(server);


//Connecting app to MongoDB via Mongoose:

const db_Connection = mongoose
    .connect(process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`Biologger App on port: ${process.env.PORT} has been connected to MongoDB Atlas`);
    })

//Get message from client:
io.on('connection', socket => {
    socket.on("Input Chat Message", msg => {
        db_Connection.then(db => {
            try {
                
            } catch (err) {
                
            }
        })
    })
})

//Server Start:
app.listen(process.env.PORT, () => {
    console.log(`The server is online and listening on port: ${process.env.PORT}`);
})

