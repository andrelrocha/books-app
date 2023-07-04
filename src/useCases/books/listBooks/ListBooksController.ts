import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {

    constructor(private listBooksUseCase: ListBooksUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);      

            const allBooks = await this.listBooksUseCase.execute(limit, page);
            return res.status(200).json(allBooks);
        } catch (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

export { ListBooksController };