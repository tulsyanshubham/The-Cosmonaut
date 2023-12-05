const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    }
  });
//   const User = mongoose.model('form' , formSchema);
//   User.createIndexes();
  module.exports = mongoose.model('form' , formSchema);