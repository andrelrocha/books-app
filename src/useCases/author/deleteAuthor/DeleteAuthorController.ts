import { Request, Response } from "express";

import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";

class DeleteAuthorController {

    constructor(private deleteAuthor: DeleteAuthorUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        await this.deleteAuthor.execute(id)

        return res.status(204).send('Author successfully deleted !')
    }
}

export { DeleteAuthorController }