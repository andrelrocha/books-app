import { Router } from "express";

import { createAuthor } from "../useCases/author/createAuthor";
import { deleteAuthor } from "../useCases/author/deleteAuthor";
import { listAuthors } from "../useCases/author/listAuthors";
import { updateAuthor } from "../useCases/author/updateAuthor";

const authorRoutes = Router();

authorRoutes.get("/", (req, res) => {
    return listAuthors.handle(req, res);
});

authorRoutes.post("/", (req, res) => {
    return createAuthor.handle(req, res);
});

authorRoutes.put("/:id", (req, res) => {
    return updateAuthor.handle(req, res);
});

authorRoutes.delete("/:id", (req, res) => {
    return deleteAuthor.handle(req, res);
});

export { authorRoutes };