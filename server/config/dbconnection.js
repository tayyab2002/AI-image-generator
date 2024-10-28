const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        // await mongoose.connect("")
        console.log("Connected");
        
    } catch (error) {
        
    }
};

module.exports = connectDB;