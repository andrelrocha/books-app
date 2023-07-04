import { authors } from "../../../models";
import { books } from "../../../models";

class ListBooksByAuthorUseCase {

    async execute(name: string) {
        try {
            const regex = new RegExp(name, "i");
            const authorsByName = await authors.find({ "name": { $regex: regex } });

            if (authorsByName.length === 0) {
                throw new Error("No authors found for the specified name!");
            }

            const authorId = authorsByName.map(author => author._id);

            const booksByAuthor = await books.find({ "author": authorId }).populate("author");

            if (booksByAuthor.length === 0) {
                throw new Error("No books found for the specified author!");
            }

            return booksByAuthor;
        } catch (err) {
            console.error(err);
            throw new Error(`Error occurred while fetching books by author ${name}!`);
        }
    }
}

export { ListBooksByAuthorUseCase };