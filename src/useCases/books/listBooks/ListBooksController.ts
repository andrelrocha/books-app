import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {

    constructor(private listBooksUseCase: ListBooksUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        
        const allBooks = await this.listBooksUseCase.execute()

        return response.status(200).json(allBooks)
    }

}

export { ListBooksController }