import { Router } from "express";

import { createAuthor } from "../useCases/author/createAuthor";
import { deleteAuthor } from "../useCases/author/deleteAuthor";
import { listAuthors } from "../useCases/author/listAuthors";
import { listAuthorById } from "../useCases/author/listAuthorById";
import { updateAuthor } from "../useCases/author/updateAuthor";
import { listAuthorByName } from "../useCases/author/listAuthorByName";

const authorRoutes = Router();

authorRoutes.get("/", (req, res, next) => {
    return listAuthors.handle(req, res, next);
});

authorRoutes.get("/search", (req, res, next) => {
    const { name } = req.query;

    if (name) {
        return listAuthorByName.handle(req, res, next);
    }
});

authorRoutes.get("/:id", (req, res, next) => {
    return listAuthorById.handle(req, res, next);
});

authorRoutes.post("/", (req, res, next) => {
    return createAuthor.handle(req, res, next);
});

authorRoutes.put("/:id", (req, res, next) => {
    return updateAuthor.handle(req, res, next);
});

authorRoutes.delete("/:id", (req, res, next) => {
    return deleteAuthor.handle(req, res, next);
});

export { authorRoutes };