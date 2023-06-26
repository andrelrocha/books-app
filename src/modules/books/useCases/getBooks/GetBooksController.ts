import { Request, Response } from "express";

import { GetBooksUseCase } from "./GetBooksUseCase";

class GetBooksController {

    constructor(private getBooksUseCase: GetBooksUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const booksList = await this.getBooksUseCase.execute()

        return res.json(booksList)
    }
}

export { GetBooksController }