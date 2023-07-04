import { NextFunction, Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {

    constructor(private listBooksUseCase: ListBooksUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);      
            
            if (!(limit > 0 && page > 0)) {
                const err = new Error("One or more parameters are invalid. Page and limit must be positive numbers");
                return next(err) as unknown as Response<unknown, Record<string, unknown>>;
            }

            const allBooks = await this.listBooksUseCase.execute(limit, page);
            return res.status(200).json(allBooks);

        } catch (err) {
            return res.status(500).json({ error: "Internal server error while loading the book's database" }); 
        }
    }
}

export { ListBooksController };