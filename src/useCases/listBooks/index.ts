import { ListBooksUseCase } from "./ListBooksUseCase";
import { ListBooksController } from "./ListBooksController";

const listBooksUseCase = new ListBooksUseCase()
const listBooks = new ListBooksController(listBooksUseCase)

export { listBooks }