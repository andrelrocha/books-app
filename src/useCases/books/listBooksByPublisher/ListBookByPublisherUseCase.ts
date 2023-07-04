import { books } from "../../../models";

class ListBookByPublisherUseCase {

    async execute(publisher: string) {

        try {
            const booksByPublisher = await books.find({ "publisher": publisher });

            if (booksByPublisher.length === 0) {
                throw new Error("No books found for the specified publisher!");
            }
            
            return booksByPublisher;
        } catch (err) {
            console.error(err);
            throw new Error(`Error occurred while fetching books by publisher ${publisher}!`);
        }
    }
}

export { ListBookByPublisherUseCase };