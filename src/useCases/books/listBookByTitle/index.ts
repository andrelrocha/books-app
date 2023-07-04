import { ListBookByTitleUseCase } from "./ListBookByTitleUseCase";
import { ListBookByTitleController } from "./ListBookByTitleController";

const listBookByTitleUseCase = new ListBookByTitleUseCase();
const listBookByTitle = new ListBookByTitleController(listBookByTitleUseCase);

export { listBookByTitle };