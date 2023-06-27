import { books } from "../../../models/Book";

class DeleteBookUseCase {

    async execute(id: string) {
        try {
            const deletedBook = await books.findByIdAndDelete(id);
            
            if (!deletedBook) {
                throw new Error("Book not found in our database!");
            } 
        } catch (err) {
            console.error(err);
            throw new Error("Failed to delete book");
        }
    }
}

export { DeleteBookUseCase };