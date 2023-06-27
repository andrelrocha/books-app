import { Request, Response } from "express"; 

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {

    constructor(private createAuthor: CreateAuthorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, country } = req.body;

        const newAuthor = await this.createAuthor.execute({
            name, 
            country
        });

        return res.status(201).json(newAuthor);
    }
}

export { CreateAuthorController };