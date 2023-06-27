import { authors } from "../../../models/Author";

interface IRequest {
    id: string;
    name: string;
    country: string;
}

class UpdateAuthorUseCase {

    async execute({ id, name, country }: IRequest ) {
        try {
            const authorExists = await authors.findById(id);

            if (authorExists) {
                const updatedAuthor = await authors.findByIdAndUpdate(id, {
                    name,
                    country,
                }, { new: true });

                return updatedAuthor;
            } else {
                throw new Error("Author not found in our database!");
            }
        } catch (err) {
            console.error(err);
            throw new Error('Failed to update author');
        }
    }
}

export { UpdateAuthorUseCase }