import { Request, Response } from "express";

import { ListBookByIdUseCase } from "./ListBookByIdUseCase";

class ListBookByIdController {

    constructor(private listBookById: ListBookByIdUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        
        const { id } = req.params;

        const book = await this.listBookById.execute(id);

        return res.status(200).json(book);
    }
}

export { ListBookByIdController };