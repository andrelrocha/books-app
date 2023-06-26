import { Router } from "express";

import { getBooks } from "../modules/books/useCases/getBooks";

const booksRoutes = Router() 

booksRoutes.get('/', (req, res) => {
    return getBooks.handle(req, res)
})

booksRoutes.post('/', (req, res) => {
    return getBooks.handle(req, res)
})

export { booksRoutes }