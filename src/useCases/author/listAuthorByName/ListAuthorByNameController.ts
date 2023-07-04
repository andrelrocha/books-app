import { Request, Response, NextFunction } from "express";

import { ListAuthorByNameUseCase } from "./ListAuthorByNameUseCase";

class ListAuthorByNameController {
    constructor(private listAuthorByName: ListAuthorByNameUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { name } = req.query;

        try {
            const authorsByName = await this.listAuthorByName.execute(name as string);

            return res.status(200).json(authorsByName);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListAuthorByNameController };