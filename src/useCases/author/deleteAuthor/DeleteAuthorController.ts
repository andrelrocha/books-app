import { Request, Response } from "express";

import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";

class DeleteAuthorController {

    constructor(private deleteAuthor: DeleteAuthorUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            await this.deleteAuthor.execute(id);

            return res.status(204).send();
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

export { DeleteAuthorController };