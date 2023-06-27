import { Router } from "express";

import { booksRoutes } from "./books.routes";
import { authorRoutes } from "./authors.routes";

const router = Router();

router.use("/books", booksRoutes);
router.use("/authors", authorRoutes);

export { router };