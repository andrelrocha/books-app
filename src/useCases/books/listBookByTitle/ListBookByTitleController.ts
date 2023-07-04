import { NextFunction, Request, Response } from "express";

import { ListBookByTitleUseCase } from "./ListBookByTitleUseCase";

class ListBookByTitleController {
    constructor(private listBookByTitle: ListBookByTitleUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { title } = req.query;

            const booksByTitle = await this.listBookByTitle.execute(title as string);

            return res.status(200).json(booksByTitle);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListBookByTitleController };