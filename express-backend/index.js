const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const playerRoute=require("./routes/players")
const port = process.env.PORT || 5000;

//middlewares
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//useing the route middleware

app.use('/players',playerRoute);




app.listen(port,()=>{
    console.log(`app is litening on port: ${port}`)
})