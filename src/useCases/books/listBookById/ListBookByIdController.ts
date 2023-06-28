import { Request, Response } from "express";

import { ListBookByIdUseCase } from "./ListBookByIdUseCase";

class ListBookByIdController {

    constructor(private listBookById: ListBookByIdUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        
        const { id } = req.params;

        try {
            const book = await this.listBookById.execute(id);

            return res.status(200).json(book);
        } catch (err) {
            console.error(err);

            if (typeof err === "string") {
                // The error is already a string, so we don't need to call toString() on it
                return res.status(400).send(err);
            }

            if (err instanceof Error) {
                // The error is an instance of the Error class, which has a toString() method
                return res.status(400).send(err.toString());
            }

            // If we get here, the error is not a string or an instance of Error, so we can't handle it
            return res.status(500).send("Internal Server Error");
        }
    }
}

export { ListBookByIdController };