import { NextFunction, Request, Response } from "express";

import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

class ListAuthorsController {
    
    constructor(private listAuthors: ListAuthorsUseCase) { }
    
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let { page = 1, limit = 5 } = req.query;
            limit = Number(limit);
            page = Number(page); 

            if (!(limit > 0 && page > 0)) {
                const err = new Error("One or more parameters are invalid. Page and limit must be positive numbers");
                return next(err) as unknown as Response<unknown, Record<string, unknown>>;
            }

            const asc = typeof req.query.asc !== "undefined";
            const desc = typeof req.query.desc !== "undefined";

            const authors = await this.listAuthors.execute(page, limit, desc, asc);
            
            return res.status(200).json(authors);
        } catch (err) {
            return res.status(500).json({ error: "Internal server error while loading the author's database" });
        }
    }
}

export { ListAuthorsController };