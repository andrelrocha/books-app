import { Request, Response } from "express";

import { ListBookByPublisherUseCase } from "./ListBookByPublisherUseCase";

class ListBookByPublisherController {

    constructor(private listBookByPublisherUseCase: ListBookByPublisherUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        //captura informações em solicitações GET
        const { publisher } = req.query;

        try {
            const booksByPublisher = await this.listBookByPublisherUseCase.execute(publisher as string);

            return res.status(200).json(booksByPublisher);
        } catch (err) {
            console.error(err);

            if (typeof err === "string") {
                return res.status(400).send(err);
            }

            if (err instanceof Error) {
                return res.status(400).send(err.toString());
            }

            return res.status(500).send("Internal Server Error");
        }
    }
}

export { ListBookByPublisherController };