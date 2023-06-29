import { NextFunction, Request, Response } from "express"; 

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {

    constructor(private createAuthor: CreateAuthorUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { name, country } = req.body;

        try {
            const newAuthor = await this.createAuthor.execute({
                name, 
                country
            });

            return res.status(201).json(newAuthor);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateAuthorController };