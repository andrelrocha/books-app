import { ListBooksByAuthorUseCase } from "./ListBooksByAuthorUseCase";
import { ListBooksByAuthorController } from "./ListBooksByAuthorController";

const listBooksByAuthorUseCase = new ListBooksByAuthorUseCase();
const listBooksByAuthor = new ListBooksByAuthorController(listBooksByAuthorUseCase);

export { listBooksByAuthor };