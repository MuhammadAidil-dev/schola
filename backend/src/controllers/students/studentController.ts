import { NextFunction, Request, Response } from 'express';
import { httpCode } from '../../config/http';
import Student from '../../models/studentModel';
import { IStudent, IStudentDocument } from '../../types/student/studentType';

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
      const payload: Omit<IStudent, '_id'> = req.body;

      const student: IStudentDocument = await Student.create(payload);

      return res.status(httpCode.CREATED).json({
        status: 'success',
        message: 'Successfuly created data',
        data: student,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default studentController;
