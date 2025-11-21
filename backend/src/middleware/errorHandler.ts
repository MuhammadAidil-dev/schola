import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';
import { httpCode } from '../config/http';
import mongoose from 'mongoose';

const handleAppError = (res: Response, error: AppError): Response => {
  return res.status(error.statusCode).json({
    status: error.statusError,
    message: error.message,
  });
};

const handleMongooseError = (res: Response, error: mongoose.Error) => {
  if (error instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(error.errors).map((e) => e.message);
    return res.status(httpCode.BAD_REQUEST).json({
      message: 'Validation error',
      errors,
    });
  }

  // Handle invalid ObjectId (CastError)
  if (error instanceof mongoose.Error.CastError) {
    return res.status(httpCode.BAD_REQUEST).json({
      message: `Invalid ${error.path}: ${error.value}`,
    });
  }

  // default unknown error
  return res.status(httpCode.INTERNAL_SERVER_ERROR).json({
    message: 'Error of mongoose',
    error,
  });
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return handleAppError(res, err);
  }

  if (err instanceof mongoose.Error) {
    return handleMongooseError(res, err);
  }

  // duplikate error
  if ((err as any).code === 11000) {
    const duplicatedField = Object.keys((err as any).keyValue).join(', ');
    return res.status(httpCode.CONFLICT).json({
      message: `Duplicate value for field(s): ${duplicatedField}`,
    });
  }

  return res.status(httpCode.INTERNAL_SERVER_ERROR).json({
    message: 'Internal Server Error',
  });
};
