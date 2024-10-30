const app = require("./app");
const connectDB = require("./config/dbconnection");


const ServerStart = async ()=>{
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is working on ${process.env.PORT} PORT`);
        })
        connectDB();
    } catch (error) {
        console.log(error.message);
    }
};

ServerStart();