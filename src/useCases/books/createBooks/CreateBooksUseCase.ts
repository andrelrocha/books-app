import { books } from "../../../models/Book";

interface IRequest {
    title: string;
    author: string;
    publisher: string;
    pageqty: number;
}

class CreateBookUseCase {
    async execute({ title, author, publisher, pageqty }: IRequest) {
        try {
            const bookExists = await books.findOne({ title });

            if (!bookExists) {
                const newBook = await books.create({
                    title,
                    author,
                    publisher,
                    pageqty,
                });

                return newBook;
            } else {
                throw new Error("Book already exists in our database!");
            }
        } catch (err) {
            console.error(err);
            throw new Error('Failed to create book');
        }
    }
}

export { CreateBookUseCase }