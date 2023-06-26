import { GetBooksUseCase } from "./GetBooksUseCase";
import { GetBooksController } from "./GetBooksController";

const getBooksUseCase = new GetBooksUseCase()
const getBooks = new GetBooksController(getBooksUseCase)

export { getBooks }