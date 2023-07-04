import { ListBookByPageQtyUseCase } from "./listBookByPageQtyUseCase";
import { ListBookByPageQtyController } from "./ListBookByPageQtyController";

const listBookByPageQtyUseCase = new ListBookByPageQtyUseCase();
const listBookByPageQty = new ListBookByPageQtyController(listBookByPageQtyUseCase);

export { listBookByPageQty };