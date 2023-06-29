import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {
        type: String, 
        required: [true, "Book's title is required"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "authors", 
        required: [true, "Author's ID is required"]
    },
    publisher: {
        type: String, 
        required: [true, "Book's publisher is required"]
    },
    pageqty: {type: Number},
});

const books = mongoose.model("books", bookSchema);

export { books };