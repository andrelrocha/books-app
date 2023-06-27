import express from "express";

import { db } from "./db/dbConnect";

import { router } from "./routes";


db.on("error", console.log.bind(console, "Database connection error!"));
db.once("open", () => console.log("Database connected!"));

const app = express();

app.use(express.json());


app.use(router);


export { app };