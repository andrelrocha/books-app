import { Router } from "express";

import { createBook } from "../useCases/books/createBooks";
import { deleteBook } from "../useCases/books/deleteBooks";
import { listBooks } from "../useCases/books/listBooks";
import { listBooksByAuthor } from "../useCases/books/listBooksByAuthor";
import { listBookById } from "../useCases/books/listBookById";
import { listBookByPageQty } from "../useCases/books/listBooksByPageQty";
import { listBookByPublisher } from "../useCases/books/listBooksByPublisher";
import { listBookByTitle } from "../useCases/books/listBookByTitle";
import { updateBook } from "../useCases/books/updateBooks";

const booksRoutes = Router();

booksRoutes.get("/", (req, res, next) => {
    return listBooks.handle(req, res, next);
});

booksRoutes.get("/search", (req, res, next) => {
    const { publisher, title, pageqty, author } = req.query;
  
    if (publisher) {
        return listBookByPublisher.handle(req, res, next);
    }
    if (title) {
        return listBookByTitle.handle(req, res, next);
    }
    if (pageqty) {
        return listBookByPageQty.handle(req, res, next);
    }
    if (author) {
        return listBooksByAuthor.handle(req, res, next);
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