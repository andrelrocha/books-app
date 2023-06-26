import { Router } from "express";

import { listBooks } from "../useCases/listBooks";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
    return listBooks.handle(req, res)
})

export { booksRoutes }