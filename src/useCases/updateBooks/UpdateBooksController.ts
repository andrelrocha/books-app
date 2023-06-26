import { Request, Response } from 'express' 

import { UpdateBookUseCase } from './UpdateBooksUseCase'

class UpdateBookController {

    constructor(private updateBook: UpdateBookUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publisher, pageqty } = req.body

        const { id } = req.params

        await this.updateBook.execute({
            title,
            author,
            publisher,
            pageqty,
            id,
        })

        return res.status(200).send({message: "Book updated successfully!"})
    }
}

export { UpdateBookController }