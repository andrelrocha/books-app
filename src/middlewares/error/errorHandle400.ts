import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandle400 = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (err instanceof mongoose.Error.ValidationError) {
        // Mongoose validation error
        return res.status(400).send({ message: "Validation error", error: err });
    }
    
    if (err instanceof mongoose.Error.CastError) {
        // Mongoose cast error
        return res.status(400).send({ message: "Invalid ID", error: err });
    }

    if (typeof err === "string") {
        return res.status(400).send(err);
    }

    if (err instanceof Error) {
        // The error is an instance of the Error class, which has a toString() method
        return res.status(400).send(err.toString());
    }

    return res.status(500).send({ message: "Internal Server Error" });
};

export { errorHandle400 };