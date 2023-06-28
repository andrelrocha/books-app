import { Request, Response } from "express"; 

import { CreateBookUseCase } from "./CreateBooksUseCase";

class CreateBookController {

    constructor(private createBook: CreateBookUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publisher, pageqty } = req.body;

        try {
            const newBook = await this.createBook.execute({
                title,
                author,
                publisher,
                pageqty,
            });

            return res.status(201).json(newBook);
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

export { CreateBookController };