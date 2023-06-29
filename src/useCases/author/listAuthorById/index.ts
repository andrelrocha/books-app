import { ListAuthorByIdUseCase } from "./ListAuthorByIdUseCase";
import { ListAuthorByIdController } from "./ListAuthorByIdController";

const listAuthorByIdUseCase = new ListAuthorByIdUseCase();
const listAuthorById = new ListAuthorByIdController(listAuthorByIdUseCase);

export { listAuthorById };