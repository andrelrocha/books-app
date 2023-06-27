import { DeleteBookUseCase } from "./DeleteBookUseCase";
import { DeleteBookController } from "./DeleteBookController";

const deleteBookUseCase = new DeleteBookUseCase()
const deleteBook = new DeleteBookController(deleteBookUseCase)

export { deleteBook }