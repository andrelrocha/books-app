import { ListAuthorsUseCase } from "./ListAuthorsUseCase";
import { ListAuthorsController } from "./ListAuthorsController";

const listAuthorsUseCase = new ListAuthorsUseCase();
const listAuthors = new ListAuthorsController(listAuthorsUseCase);

export { listAuthors };