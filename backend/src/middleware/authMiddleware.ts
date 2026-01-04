import AppError from '../utils/appError';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JwtPayload } from '../utils/jwt';
import { NextFunction, Request, Response } from 'express';
import { UserRole } from '../types/user/userType';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.cookies?.accessToken as string | undefined;
    const headerToken = req.headers.authorization?.split(' ')[1];
    const token = accessToken || headerToken;

    if (!token) {
      return next(new AppError(401, 'Tidak ada access token'));
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded;

    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return next(new AppError(401, error.message || 'Token expired'));
    }

    if (error.name === 'JsonWebTokenError') {
      return next(new AppError(401, error.message || 'Token Error'));
    }

    next(error);
  }
};

export const authenticateRole = (...validRole: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return next(new AppError(401, 'Tidak ada access token'));
      }
      const role: UserRole = req.user.role;

      if (!validRole.includes(role)) {
        return next(new AppError(403, 'Tidak ada izin akses'));
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
