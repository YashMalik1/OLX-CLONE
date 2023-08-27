const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    category: {
        type: String,
        require: [true, 'Category is required.']
    },
    pro_name: {
        type: String,
        require: [true, 'Name field is required.']
    },
    description: {
        type: String,
        require: [true, 'Description is required.']
    },
    price: {
        type: Number,
        require: [true, 'Price is required.']
    },
    dateOfBuying: {
        type: Date,
        require: [true, 'Date of buying is required.']
    },
    hostel: {
        type: String,
        require: [true, 'Hostel is required.']
    },
    negotiable: {
        type: Boolean,
        require: [true, 'Negotiable or not?']
    },
    sellerId: {
        type: String,
        require: [true, 'Seller Id is required']
    },
    photo: {
        type: String
    }
}, {timestamps: true});

// creates a model/collection with the name 'posts' by pluralising the first parameter. The 2nd parameter is the schema it should follow to create the collection.
const Posts = mongoose.model('post', postSchema);

module.exports = Posts;


