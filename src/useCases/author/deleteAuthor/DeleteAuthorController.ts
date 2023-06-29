import { NextFunction, Request, Response } from "express";

import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";

class DeleteAuthorController {

    constructor(private deleteAuthor: DeleteAuthorUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { id } = req.params;

        try {
            await this.deleteAuthor.execute(id);

            return res.status(204).send();
        } catch (err) {
            next(err);
        }

        return res.status(500).json({ error: "Internal server error" });
    }
}

export { DeleteAuthorController };