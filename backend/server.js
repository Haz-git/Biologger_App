const dotenv = require('dotenv');

//Using dotenv for env variables:
dotenv.config({
    path: `${__dirname}/config.env`
});

//Grabbing Express Application: 
const app = require('./app.js');

//Server Start:
app.listen(process.env.PORT, () => {
    console.log(`The server is online and listening on port: ${process.env.PORT}`);
})

