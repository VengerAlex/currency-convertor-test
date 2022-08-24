const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index");
require("dotenv").config();


const PORT = process.env.PORT || 1000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)

        app.listen(PORT, () => console.log('SEVER STARTED ' + PORT));
    } catch(error){
        console.log('something went wrong');
    }
}

start();