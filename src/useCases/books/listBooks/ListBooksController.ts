import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {

    constructor(private listBooksUseCase: ListBooksUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const allBooks = await this.listBooksUseCase.execute();
            return response.status(200).json(allBooks);
        } catch (err) {
            console.error(err);

            if (typeof err === "string") {
                return response.status(500).send(err);
            }

            if (err instanceof Error) {
                return response.status(500).send(err.toString());
            }

            return response.status(500).send("Internal Server Error");
        }
    }
}

export { ListBooksController };