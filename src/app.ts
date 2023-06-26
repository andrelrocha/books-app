import express from "express";
import { db } from "./db/dbConnect";
import { books } from './modules/books/models/Book';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/books', async (req: Request, res: Response) => {
  try {
    const { title, author, publisher, pageqty } = req.body;

    const newBook = await books.create({
      title,
      author,
      publisher,
      pageqty,
    });

    return res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create book' });
  }
});

const app = express();
app.use(express.json());

app.use(router);

db.on("error", console.log.bind(console, 'Database connection error!'));
db.once("open", () => console.log("Database connected!"));

export { app };