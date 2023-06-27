import { Router } from "express";

import { createAuthor } from "../useCases/author/createAuthor";
import { listAuthors } from "../useCases/author/listAuthors";

const authorRoutes = Router()

authorRoutes.get("/", (req, res) => {
    return listAuthors.handle(req, res)
})

authorRoutes.post("/", (req, res) => {
    return createAuthor.handle(req, res)
})

export { authorRoutes }