import { ListBookByIdUseCase } from "./ListBookByIdUseCase";
import { ListBookByIdController } from "./ListBookByIdController";

const listBookByIdUseCase = new ListBookByIdUseCase();
const listBookById = new ListBookByIdController(listBookByIdUseCase);

export { listBookById };