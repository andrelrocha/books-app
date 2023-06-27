import { Request, Response } from "express";

import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

class ListAuthorsController {
    
    constructor(private listAuthors: ListAuthorsUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const authors = await this.listAuthors.execute();

        return response.status(200).json(authors);
    }
}

export { ListAuthorsController };