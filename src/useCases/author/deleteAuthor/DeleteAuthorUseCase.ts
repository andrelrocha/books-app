import { authors } from "../../../models/Author";

class DeleteAuthorUseCase {

    async execute(id: string) {
        try {
            const authorExists = await authors.findById(id)

            if (authorExists) {
                await authors.findByIdAndDelete(id)
            } else {
                throw new Error('Author not found in our database!');
            }

        } catch (err) {
            console.error(err);
            throw new Error('Failed to delete author');
        }
    }
}

export { DeleteAuthorUseCase }