import { authors } from "../../../models/Author"

interface IRequest {
    name: string;
    country: string;
}

class CreateAuthorUseCase {
    async execute({ name, country }: IRequest) {
        try {
            const authorExists = await authors.findOne({ name });

            if (!authorExists) {
                const newAuthor = await authors.create({
                    name, 
                    country
                });

                return newAuthor;
            } else {
                throw new Error("Author already exists in our database!");
            }
        } catch (err) {
            console.error(err);
            throw new Error('Failed to create author');
        }
    }
}

export { CreateAuthorUseCase }