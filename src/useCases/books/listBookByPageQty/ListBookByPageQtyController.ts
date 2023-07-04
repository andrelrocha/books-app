import { Request, Response, NextFunction } from "express";

import { ListBookByPageQtyUseCase } from "./listBookByPageQtyUseCase";

class ListBookByPageQtyController {

    constructor(private listBookByPageQty: ListBookByPageQtyUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const pageQty = typeof req.query.pageqty === "string" ? parseInt(req.query.pageqty) : undefined;
        
        // Verifica se a query minPage/maxPage existem, e define a variável como true caso existam, caso contrário, será falso.
        const minPage = typeof req.query.minPage !== "undefined";
        const maxPage = typeof req.query.maxPage !== "undefined";
    
        try {
            const booksByPageQty = await this.listBookByPageQty.execute(pageQty, minPage, maxPage);
    
            return res.status(200).json(booksByPageQty);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListBookByPageQtyController };