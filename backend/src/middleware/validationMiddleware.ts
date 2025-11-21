import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import AppError from '../utils/appError';

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      console.log('error : ', error);
      const message = error.details[0].message;
      throw new AppError(400, message);
    }

    req.body = value;
    next();
  };
};
