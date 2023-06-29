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
            next(err);
        }

        return res.status(500).json({ error: "Internal server error" });
    }
}

export { ListBookByIdController };