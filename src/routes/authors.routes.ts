import { Router } from "express";

import { createAuthor } from "../useCases/author/createAuthor";

const authorRoutes = Router()

authorRoutes.post("/", (req, res) => {
    return createAuthor.handle(req, res)
})

export { authorRoutes }