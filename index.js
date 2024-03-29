const express = require("express");
const connect = require("./config/db")
require('dotenv').config();
const app = express();
const router = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const bodyParser = require("body-parser");
//connect mongodb database
connect();
app.use(bodyParser.json());
app.use("/" , router);
app.use("/" , postRoutes); 

// app.get('/' , (req , res) =>{
//     res.send('Hello mern blog');
// })

const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
    console.log('app is running');
});