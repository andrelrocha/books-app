import { books } from "../../models/Book";

class ListBookByIdUseCase {
    async execute(id: string) {
        const book = await books.findById(id)
        return book
    }
}

export { ListBookByIdUseCase }