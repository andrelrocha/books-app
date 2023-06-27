import { ListBookByPublisherUseCase } from "./ListBookByPublisherUseCase";
import { ListBookByPublisherController } from "./ListBookByPublisherController";

const listBookByPublisherUseCase = new ListBookByPublisherUseCase();
const listBookByPublisher = new ListBookByPublisherController(listBookByPublisherUseCase);

export { listBookByPublisher };