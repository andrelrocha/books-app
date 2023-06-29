import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {

    constructor(private listBooksUseCase: ListBooksUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const allBooks = await this.listBooksUseCase.execute();
            return res.status(200).json(allBooks);
        } catch (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

export { ListBooksController };