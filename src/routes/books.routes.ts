import { Router } from "express";

import { createBook } from "../useCases/createBooks";
import { listBooks } from "../useCases/listBooks";
import { updateBook } from "../useCases/updateBooks";
import { listBookById } from "../useCases/listBookById";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
    return listBooks.handle(req, res)
})

booksRoutes.get("/:id", (req, res) => {
    return listBookById.handle(req, res)
})

booksRoutes.post("/", (req, res) => {
    return createBook.handle(req, res)
})

booksRoutes.put("/:id", (req, res) => {
    return updateBook.handle(req, res)
})

export { booksRoutes }