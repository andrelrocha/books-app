import { Document, Model, Schema, model } from "mongoose";

interface IBook extends Document {
    id: string;
    title: string;
    author: string;
    publisher: string;
    pageqty: number;
}

const bookSchema = new Schema<IBook>({
    id: { type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    pageqty: { type: Number },
});

const books: Model<IBook> = model<IBook>('books', bookSchema);

export { books }