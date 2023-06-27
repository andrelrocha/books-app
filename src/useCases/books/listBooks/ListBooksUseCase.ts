import { books } from "../../../models/Book";

class ListBooksUseCase {
    async execute() {
        try {
            const allBooks = await books.find().populate("author");
            return allBooks;
        } catch (error) {
            console.error("An error occurred while loading the book's database:", error);
            throw error;
        }
    }
}

export { ListBooksUseCase };