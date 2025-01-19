// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB
const mongoose = require('mongoose');
module.exports = {
    db: process.env.DB,
    react_app_url: "http://localhost:4200"
  };
// mongodb connection db password: iA4gvK9sD4CbXXnK
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbNHT:iA4gvK9sD4CbXXnK@cluster0.lnecu.mongodb.net/nhtdb?retryWrites=true&w=majority&appName=Cluster0', );
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }

    } 
;
module.exports = connectDB;

  