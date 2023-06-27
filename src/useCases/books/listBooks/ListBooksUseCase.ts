import { books } from "../../../models/Book";

class ListBooksUseCase {
    async execute() {
        const allBooks = await books.find().populate('author')
        return allBooks
    }
}

export { ListBooksUseCase }