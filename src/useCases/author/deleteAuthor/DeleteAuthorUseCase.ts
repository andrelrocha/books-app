import { authors } from "../../../models/";

class DeleteAuthorUseCase {

    async execute(id: string) {
        try {
            const deletedAuthor = await authors.findByIdAndDelete(id);
            
            if (!deletedAuthor) {
                throw new Error("Author not found in our database!");
            }
        } catch (err) {
            console.error(err);
            throw new Error("Failed to delete author");
        }
    }
}

export { DeleteAuthorUseCase };