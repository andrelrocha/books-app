import { books } from "../../models/Book";

class ListBooksUseCase {
    async execute() {
        const allBooks = await books.find()
        return allBooks
    }
}

export { ListBooksUseCase }