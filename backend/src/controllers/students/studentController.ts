import { NextFunction, Request, Response } from 'express';
import { httpCode } from '../../config/http';
import AppError from '../../utils/appError';

type StudentController = {
  getAllStudents: (req: Request, res: Response, next: NextFunction) => void;
  createStudent: (req: Request, res: Response, next: NextFunction) => void;
};

const studentController: StudentController = {
  getAllStudents: async (req, res, next) => {
    try {
      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Success get all data students',
        data: {},
      });
    } catch (error) {
      next(error);
    }
  },
  createStudent: async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  },
};

export default studentController;
