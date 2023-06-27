import { CreateAuthorUseCase } from "./CreateAuthorUseCase"
import { CreateAuthorController } from "./CreateAuthorController"

const createAuthorUseCase = new CreateAuthorUseCase()
const createAuthor = new CreateAuthorController(createAuthorUseCase)

export { createAuthor }