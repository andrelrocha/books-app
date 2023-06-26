import { CreateBookUseCase } from "./CreateBooksUseCase";
import { CreateBookController } from "./CreateBooksController";

const createBookUseCase = new CreateBookUseCase();
const createBook = new CreateBookController(createBookUseCase);

export { createBook };