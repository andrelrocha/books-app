import { books } from "../../../models/Book";

class ListBookByIdUseCase {
    async execute(id: string) {
        try {
            const book = await books.findById(id)
            return book
        } catch (err) {
            console.error(err);
            throw new Error('Book not found in our database!');
        }
    }
}

export { ListBookByIdUseCase }