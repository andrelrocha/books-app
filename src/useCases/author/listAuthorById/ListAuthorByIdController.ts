import { NextFunction, Request, Response } from "express";

import { ListAuthorByIdUseCase } from "./ListAuthorByIdUseCase";

class ListAuthorByIdController {

    constructor(private listAuthorById: ListAuthorByIdUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { id } = req.params;

        try {
            const author = await this.listAuthorById.execute(id);

            return res.status(200).json(author);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListAuthorByIdController };