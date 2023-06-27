import { books } from "../../../models/Book";

class ListBookByPublisherUseCase {

    async execute(publisher: string) {

        try {
            const booksByPublisher = await books.find({ "publisher": publisher });
            return booksByPublisher;
        } catch (err) {
            console.error(err);
            throw new Error("Book not found in our database!");
        }
    }
}

export { ListBookByPublisherUseCase };