import { ListAuthorByNameUseCase } from "./ListAuthorByNameUseCase";
import { ListAuthorByNameController } from "./ListAuthorByNameController";

const listAuthorByNameUseCase = new ListAuthorByNameUseCase();
const listAuthorByName = new ListAuthorByNameController(listAuthorByNameUseCase);

export { listAuthorByName };