import { Request, Response } from "express"; 

import { UpdateBookUseCase } from "./UpdateBooksUseCase";

class UpdateBookController {

    constructor(private updateBook: UpdateBookUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publisher, pageqty } = req.body;

        const { id } = req.params;

        try {
            await this.updateBook.execute({
                title,
                author,
                publisher,
                pageqty,
                id,
            });

            return res.status(200).send({message: "Book updated successfully!"});
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

export { UpdateBookController };