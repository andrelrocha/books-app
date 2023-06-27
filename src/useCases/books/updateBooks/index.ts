import { UpdateBookUseCase } from "./UpdateBooksUseCase";
import { UpdateBookController } from "./UpdateBooksController";

const updateBookUseCase = new UpdateBookUseCase();
const updateBook = new UpdateBookController(updateBookUseCase);

export { updateBook };