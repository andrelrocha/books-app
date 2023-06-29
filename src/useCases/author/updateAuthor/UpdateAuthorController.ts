import { NextFunction, Request, Response } from "express"; 

import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

class UpdateAuthorController {

    constructor(private updateAuthor: UpdateAuthorUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { name, country } = req.body;  

        const { id } = req.params;

        try {
            await this.updateAuthor.execute({
                name,
                country,
                id,
            });

            return res.status(200).send({ message: "Author updated successfully!" });
        } catch (err) {
            next(err);
        }

        return res.status(500).json({ error: "Internal server error" });
    }
}

export { UpdateAuthorController };