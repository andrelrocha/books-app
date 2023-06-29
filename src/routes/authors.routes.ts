import { Router } from "express";

import { createAuthor } from "../useCases/author/createAuthor";
import { deleteAuthor } from "../useCases/author/deleteAuthor";
import { listAuthors } from "../useCases/author/listAuthors";
import { updateAuthor } from "../useCases/author/updateAuthor";

const authorRoutes = Router();

authorRoutes.get("/", (req, res) => {
    return listAuthors.handle(req, res);
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