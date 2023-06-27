import { Request, Response } from "express";

import { DeleteBookUseCase } from "./DeleteBookUseCase";

class DeleteBookController {

    constructor(private deleteBook: DeleteBookUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        await this.deleteBook.execute(id);

        return res.status(204).send("Book successfully deleted !");
    }
}

export { DeleteBookController };