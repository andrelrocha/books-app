import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    pageqty: {type: Number},
})

const books = mongoose.model('books', bookSchema)

export { books }