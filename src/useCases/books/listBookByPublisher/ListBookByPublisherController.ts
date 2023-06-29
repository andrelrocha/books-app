import { NextFunction, Request, Response } from "express"; 

import { ListBookByPublisherUseCase } from "./ListBookByPublisherUseCase";

class ListBookByPublisherController {

    constructor(private listBookByPublisherUseCase: ListBookByPublisherUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        //captura informações em solicitações GET
        const { publisher } = req.query;

        try {
            const booksByPublisher = await this.listBookByPublisherUseCase.execute(publisher as string);

            return res.status(200).json(booksByPublisher);
        } catch (err) {
            next(err);
        }

        return res.status(500).json({ error: "Internal server error" });
    }
}

export { ListBookByPublisherController };