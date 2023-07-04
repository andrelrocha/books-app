import { Request, Response, NextFunction } from "express";

import { ListBooksByAuthorUseCase } from "./ListBooksByAuthorUseCase";

class ListBooksByAuthorController {
    
    constructor(private listBooksByAuthor: ListBooksByAuthorUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const { author } = req.query;

        try {
            const booksByAuthor = await this.listBooksByAuthor.execute(author as string);

            return res.status(200).json(booksByAuthor);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListBooksByAuthorController };