import { books } from "../../../models/Book";

interface IRequest {
    id: string;
    title: string;
    author: string;
    publisher: string;
    pageqty: number;
}

class UpdateBookUseCase {
    
    async execute ({ id, title, author, publisher, pageqty }: IRequest) {
        try {
            const bookExists = await books.findById(id);

            if (bookExists) {
                const updatedBook = await books.findByIdAndUpdate(id, {
                    title,
                    author,
                    publisher,
                    pageqty,
                }, { new: true });

                return updatedBook;
            } else {
                throw new Error("Book not found in our database!");
            }
        } catch (err) {
            console.error(err);
            throw new Error('Failed to update book');
        }
    }
}

export { UpdateBookUseCase }