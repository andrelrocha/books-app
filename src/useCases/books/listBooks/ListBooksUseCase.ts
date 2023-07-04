import { books } from "../../../models/";

class ListBooksUseCase {
    async execute(limit: number, page: number, desc: any, asc: any) {
        try {

            let order = 1;
            if (desc) order = -1;
            if (asc) order = 1;

            const allBooks = await books.find()
                .populate("author")
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ "title": order });
            return allBooks;
        } catch (error) {
            console.error("An error occurred while loading the book's database:", error);
            throw error;
        }
    }
}

export { ListBooksUseCase };