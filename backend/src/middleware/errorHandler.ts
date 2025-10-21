import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';
import { httpCode } from '../config/http';

const handleAppError = (res: Response, error: AppError): Response => {
  return res.status(error.statusCode).json({
    status: 'Error',
    message: error.message,
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

  return res.status(httpCode.INTERNAL_SERVER_ERROR).json({
    message: 'Internal Server Error',
  });
};
