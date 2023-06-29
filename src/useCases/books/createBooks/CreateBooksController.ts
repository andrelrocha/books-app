import { NextFunction, Request, Response } from "express"; 

import { CreateBookUseCase } from "./CreateBooksUseCase";

class CreateBookController {

    constructor(private createBook: CreateBookUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
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
            next(err);
        }

        return res.status(500).json({ error: "Internal server error" });
    }
}

export { CreateBookController };