import { books } from "../../../models";

class ListBookByPageQtyUseCase {

    async execute(pageQty: any, minPage: any, maxPage: any) {
        try {
            let booksByPageQty: any = {};

            if (minPage) {
                booksByPageQty = await books.find({ "pageqty": { $gte: pageQty } });
            } else if (maxPage) {
                booksByPageQty = await books.find({ "pageqty": { $lte: pageQty } });
            } else {
                booksByPageQty = await books.find({ "pageqty": pageQty });
            }

            if (booksByPageQty.length === 0) {
                throw new Error("No books found for the specified page quantity!");
            }

            return booksByPageQty;
        } catch (err) {
            console.error(err);
            throw new Error(`Error occurred while fetching books by page quantity ${pageQty}!`);
        }
    }
}

export { ListBookByPageQtyUseCase };