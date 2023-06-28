import { Request, Response } from "express"; 

import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

class UpdateAuthorController {

    constructor(private updateAuthor: UpdateAuthorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
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

export { UpdateAuthorController };