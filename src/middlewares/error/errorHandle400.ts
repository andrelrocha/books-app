import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandle400 = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    /* i cant figure it why this is not working, and it continues to display mongoose standard error messages
    if (err instanceof mongoose.Error.ValidationError) {
        // Mongoose validation error
        const errorMessages = Object.values(err.errors).map((error) => error.message)
            .join(", ");
        return res.status(400).send({ message: `the following errors were found: ${errorMessages}`});
    }
    if (err instanceof mongoose.Error.CastError) {
        // Mongoose cast error
        return res.status(400).send({ message: "Invalid ID", error: err });
    }*/

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