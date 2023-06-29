import express from "express";

import { db } from "./db/dbConnect";
import { router } from "./routes";
import { errorHandle400 } from "./middlewares/error/errorHandle400";


db.on("error", console.log.bind(console, "Database connection error!"));
db.once("open", () => console.log("Database connected!"));

const app = express();
app.use(express.json());

app.use(router);
app.use(errorHandle400);

export { app };