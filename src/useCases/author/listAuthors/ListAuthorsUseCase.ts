import { authors } from "../../../models/Author";

class ListAuthorsUseCase {

    async execute() {
        const allAuthors = await authors.find()
        return allAuthors
    }
}

export { ListAuthorsUseCase }