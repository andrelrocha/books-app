import { authors } from "../../../models/";

class ListAuthorByIdUseCase {
    async execute(id: string) {
        try {
            const author = await authors.findById(id);

            if (!author) {
                throw new Error("Author not found in our database!");
            }

            return author;
        } catch (err) {
            console.error(err);
            throw new Error("Error occurred while fetching the author's id in our database!");
        }
    }
}

export { ListAuthorByIdUseCase };