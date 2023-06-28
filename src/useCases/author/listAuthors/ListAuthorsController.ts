import { Request, Response } from "express";

import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

class ListAuthorsController {
    
    constructor(private listAuthors: ListAuthorsUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const authors = await this.listAuthors.execute();
            
            return response.status(200).json(authors);
        } catch (err) {
            console.error(err);

            if (typeof err === "string") {
                return response.status(500).send(err);
            }

            if (err instanceof Error) {
                return response.status(500).send(err.toString());
            }

            return response.status(500).send("Internal Server Error");
        }
    }
}

export { ListAuthorsController };