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
        required: [true, "Book's publisher is required"],
        enum: {
            values: ["Panini", "Independent", "Other"],
            message: "Publisher {VALUE} is not valid --- Book's publisher must be Panini, Independent or Other"
        }
    },
    pageqty: {
        type: Number,
        validate: {
            validator: (value: number) => {
                return value > 10 && value < 10000;
            },
            message: "{VALUE} pages is not valid --- Book's page quantity must be greater than 10 and less than 10000"
        }
        //min: [10, "{VALUE} pages is not valid --- Book's page quantity must be greater than 10 and less than 10000"],
        //max: [10000, "{VALUE} pages is not valid --- Book's page quantity must be greater than 10 and less than 10000"],
    },
});

const books = mongoose.model("books", bookSchema);

export { books };