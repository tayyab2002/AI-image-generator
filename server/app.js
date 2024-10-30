const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use((err,req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something is wrong!";
    return res.status(status).json({
        success : false,
        status,
        message
    })
})
const AiImageGenerator = require("./routes/routing");
app.use(AiImageGenerator);

module.exports = app;