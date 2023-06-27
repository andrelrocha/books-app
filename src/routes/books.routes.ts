import { Router } from "express";

import { createBook } from "../useCases/createBooks";
import { deleteBook } from "../useCases/deleteBooks";
import { listBooks } from "../useCases/listBooks";
import { listBookById } from "../useCases/listBookById";
import { updateBook } from "../useCases/updateBooks";

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

booksRoutes.delete("/:id", (req, res) => {
    return deleteBook.handle(req, res)
})

export { booksRoutes }