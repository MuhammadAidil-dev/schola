import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import AppError from '../utils/appError';

export const validateRequest = <T>(schema: ObjectSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // kumpulkan semua error
      stripUnknown: true, // hapus field yang tidak boleh
    });

    if (error) {
      console.log('error : ', error);
      const messages = error.details.map((d) => d.message);
      return next(new AppError(400, messages.join(', ')));
    }

    req.body = value;
    next();
  };
};
