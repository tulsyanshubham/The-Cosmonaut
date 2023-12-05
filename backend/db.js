const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://tulsyanshubham:shubham10@the-cosmonaut.twh6zkj.mongodb.net/';

const connectToMongo = async () => {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully"))
}

module.export = connectToMongo();