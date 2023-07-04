import { books } from "../../../models/";

class ListBooksUseCase {
    async execute(limit: number, page: number) {
        try {
            const allBooks = await books.find()
                .populate("author")
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ "title": 1 });
            return allBooks;
        } catch (error) {
            console.error("An error occurred while loading the book's database:", error);
            throw error;
        }
    }
}

export { ListBooksUseCase };