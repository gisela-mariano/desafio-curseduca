import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema, ValidationError } from "yup";

const schemaValidationMiddleware = (schema: AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {

  try {
    const validatedData = await schema.validate(req.body, {
      strict: true,
      abortEarly: false,
      stripUnknown: true,
    });

    req.body = validatedData;

    next();

  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).json({ message: error.errors.join(", ") });
  }
}

export default schemaValidationMiddleware;
