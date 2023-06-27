import { Request, Response } from "express";

import { ListBookByPublisherUseCase } from "./ListBookByPublisherUseCase";

class ListBookByPublisherController {

    constructor(private listBookByPublisherUseCase: ListBookByPublisherUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        //captura informações em solicitações GET
        const { publisher } = req.query

        const booksByPublisher = await this.listBookByPublisherUseCase.execute(publisher as string)

        return res.status(200).json(booksByPublisher)
    }
}

export { ListBookByPublisherController }