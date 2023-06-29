import { NextFunction, Request, Response } from "express"; 

import { UpdateBookUseCase } from "./UpdateBooksUseCase";

class UpdateBookController {

    constructor(private updateBook: UpdateBookUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
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
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { UpdateBookController };