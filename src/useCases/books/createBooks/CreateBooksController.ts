import { Request, Response } from "express"; 

import { CreateBookUseCase } from "./CreateBooksUseCase";

class CreateBookController {

    constructor(private createBook: CreateBookUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publisher, pageqty } = req.body;

        const newBook = await this.createBook.execute({
            title,
            author,
            publisher,
            pageqty,
        });

        return res.status(201).json(newBook);
    }
}

export { CreateBookController };