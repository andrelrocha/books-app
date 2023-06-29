import { NextFunction, Request, Response } from "express";

import { ListBookByIdUseCase } from "./ListBookByIdUseCase";

class ListBookByIdController {

    constructor(private listBookById: ListBookByIdUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        
        const { id } = req.params;

        try {
            const book = await this.listBookById.execute(id);

            return res.status(200).json(book);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListBookByIdController };