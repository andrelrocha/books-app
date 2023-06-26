import { Request, Response } from 'express' 

import { CreateBookUseCase } from './CreateBookUseCase'

class CreateBookController {

    constructor(private createBookUseCase: CreateBookUseCase) {}
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publisher, pageqty } = req.body


        const newBook = await this.createBookUseCase.execute({
            title,
            author,
            publisher,
            pageqty,
        })

        return res.status(201).json(newBook)
    }
}

export { CreateBookController }