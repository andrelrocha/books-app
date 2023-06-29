import { Request, Response } from "express";

import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

class ListAuthorsController {
    
    constructor(private listAuthors: ListAuthorsUseCase) { }
    
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const authors = await this.listAuthors.execute();
            
            return res.status(200).json(authors);
        } catch (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

export { ListAuthorsController };