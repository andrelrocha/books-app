import { Router } from "express";

import { createBook } from "../useCases/books/createBooks";
import { deleteBook } from "../useCases/books/deleteBooks";
import { listBooks } from "../useCases/books/listBooks";
import { listBookById } from "../useCases/books/listBookById";
import { listBookByPublisher } from "../useCases/books/listBookByPublisher";
import { listBookByTitle } from "../useCases/books/listBookByTitle";
import { updateBook } from "../useCases/books/updateBooks";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
    return listBooks.handle(req, res);
});

booksRoutes.get("/search", (req, res, next) => {
    const { publisher, title } = req.query;
  
    if (publisher) {
        return listBookByPublisher.handle(req, res, next);
    }
    if (title) {
        return listBookByTitle.handle(req, res, next);
    }
});

booksRoutes.get("/:id", (req, res, next) => {
    return listBookById.handle(req, res, next);
});

booksRoutes.post("/", (req, res, next) => {
    return createBook.handle(req, res, next);
});

booksRoutes.put("/:id", (req, res, next) => {
    return updateBook.handle(req, res, next);
});

booksRoutes.delete("/:id", (req, res, next) => {
    return deleteBook.handle(req, res, next);
});

export { booksRoutes };