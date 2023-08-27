const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    Name: {
        type: String,
        require: [true, 'firstName is required.']
    },
    hostel: {
        type: String,
        // require: [true, 'Hostel is required.']
    },
    roll_no: {
        type: Number,
        require: [true, 'Roll number is required.']
    },
    department: {
        type: String
    },
    email: {
        type: String,
        require: [true, 'Email is required.']
    },
    phone: {
        type: Number,
        // require: [true, 'Phone number is required.']
    },
    microsoftId: {
        type: String,
        require: [true, 'Id is required']
    },
    profile_pic: {
        data: Buffer,
        contentType: String
    },
    program: {
        type: String,
        require: [true, 'Program is required.']
    }
});

// creates a model/collection with the name 'users' by pluralising the first parameter. The 2nd parameter is the schema it should follow to create the collection.
const Users = mongoose.model('user', userSchema);

module.exports = Users;


