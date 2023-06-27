import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";
import { DeleteAuthorController } from "./DeleteAuthorController";

const deleteAuthorUseCase = new DeleteAuthorUseCase()
const deleteAuthor = new DeleteAuthorController(deleteAuthorUseCase)

export { deleteAuthor }