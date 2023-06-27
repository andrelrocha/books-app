import { Request, Response } from 'express' 

import { UpdateAuthorUseCase } from './UpdateAuthorUseCase'

class UpdateAuthorController {

    constructor(private updateAuthor: UpdateAuthorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, country } = req.body  

        const { id } = req.params

        await this.updateAuthor.execute({
            name, 
            country,
            id,
        })

        return res.status(200).send({message: "Author updated successfully!"})
    }

}

export { UpdateAuthorController }