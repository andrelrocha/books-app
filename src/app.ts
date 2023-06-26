import express from "express";

import { db } from "./db/dbConnect"
import { books } from "./models/Book";


db.on("error", console.log.bind(console, 'Database connection error!'))
db.once("open", () => console.log("Database connected!"))

const app = express();

app.use(express.json())



app.get('/', (req, res) => {
  res.status(200).send();
}) 

app.get('/livros', (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books)
  })
})

export { app }