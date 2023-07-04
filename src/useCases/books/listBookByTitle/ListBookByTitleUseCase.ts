import { books } from "../../../models";

class ListBookByTitleUseCase {
    async execute(title: string) {
        try {
            const booksByTitle = await books.find({ "title": title });

            if (booksByTitle.length === 0) {
                throw new Error("No books found for the specified title!");
            }
            
            return booksByTitle;
        } catch (err) {
            console.error(err);
            throw new Error(`Error occurred while fetching books by title ${title}!`);
        }
    }
}

export { ListBookByTitleUseCase };