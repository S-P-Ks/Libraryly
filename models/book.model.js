const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
        _id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        ISBN: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        pages: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        inventory: {
            type: Number,
            required: true,
            // Number of books
        },
    },
    {
        timestamps: true,
    }
);

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;
