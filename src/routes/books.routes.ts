import { Router } from "express";

import { createBook } from "../useCases/createBooks";
import { listBooks } from "../useCases/listBooks";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
    return listBooks.handle(req, res)
})

booksRoutes.post("/", (req, res) => {
    return createBook.handle(req, res)
})

export { booksRoutes }