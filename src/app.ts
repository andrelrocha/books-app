import express from "express";

import { Request, Response, NextFunction } from "express";

import { db } from "./db/dbConnect";

import { router } from "./routes";


db.on("error", console.log.bind(console, "Database connection error!"));
db.once("open", () => console.log("Database connected!"));

const app = express();

app.use(express.json());


app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (typeof err === "string") {
        return res.status(400).send(err);
    }

    if (err instanceof Error) {
        // The error is an instance of the Error class, which has a toString() method
        return res.status(400).send(err.toString());
    }

    return res.status(500).send("Internal Server Error");
});


export { app };