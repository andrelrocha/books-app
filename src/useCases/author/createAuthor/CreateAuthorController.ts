import { Request, Response } from "express"; 

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {

    constructor(private createAuthor: CreateAuthorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, country } = req.body;

        try {
            const newAuthor = await this.createAuthor.execute({
                name, 
                country
            });

            return res.status(201).json(newAuthor);
        } catch (err) {
            console.error(err);

            if (typeof err === "string") {
                return res.status(400).send(err);
            }

            if (err instanceof Error) {
                return res.status(400).send(err.toString());
            }

            return res.status(500).send("Internal Server Error");
        }
    }
}

export { CreateAuthorController };