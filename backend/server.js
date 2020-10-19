const dotenv = require('dotenv');
const express = require('express');
const app = express();

//Using dotenv for env variables:
dotenv.config({
    path: `${__dirname}/config.env`
});
//Use Json middleware:
app.use(express.json());

//Server Start:
app.listen(process.env.PORT, () => {
    console.log(`The server is online and listening on port: ${process.env.PORT}`);
})

