import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";
import { UpdateAuthorController } from "./UpdateAuthorController";

const updateAuthorUseCase = new UpdateAuthorUseCase();
const updateAuthor = new UpdateAuthorController(updateAuthorUseCase);

export { updateAuthor };