import { CreateBookUseCase } from "./CreateBookUseCase";
import { CreateBookController } from "./CreateBookController";

const createBookUseCase = new CreateBookUseCase();
const createBook = new CreateBookController(createBookUseCase);

export { createBook, createBookUseCase };