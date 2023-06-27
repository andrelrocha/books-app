import { books } from "../../../models/Book";

class ListBookByIdUseCase {
    
    async execute(id: string) {
        try {
            const book = await books.findById(id).populate("author", "name");
            
            if (!book) {
                throw new Error("Book not found in our database!");
            }

            return book;
        } catch (err) {
            console.error(err);
            throw new Error("Error occurred while fetching the book's id in our database!");
        }
    }
}

export { ListBookByIdUseCase };