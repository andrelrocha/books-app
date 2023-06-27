import { books } from "../../models/Book";

class DeleteBookUseCase {

    async execute(id: string) {
        try {
            const bookExists = await books.findById(id)
           
            if (bookExists) {
                await books.findByIdAndDelete(id)
            } else {
                throw new Error('Book not found in our database!');
            }

        } catch (err) {
            console.error(err);
            throw new Error('Failed to delete book');
        }
    }
}

export { DeleteBookUseCase }