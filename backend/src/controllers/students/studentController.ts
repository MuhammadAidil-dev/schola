import { NextFunction, Request, Response } from 'express';
import { httpCode } from '../../config/http';
import Student from '../../models/studentModel';
import {
  CreateStudentDTO,
  IStudent,
  IStudentDocument,
  UpdateStudentDTO,
} from '../../types/student/studentType';
import AppError from '../../utils/appError';

type StudentController = {
  getAllStudents: (req: Request, res: Response, next: NextFunction) => void;
  getStudentById: (req: Request, res: Response, next: NextFunction) => void;
  createStudent: (req: Request, res: Response, next: NextFunction) => void;
  updateStudent: (req: Request, res: Response, next: NextFunction) => void;
  deleteStudent: (req: Request, res: Response, next: NextFunction) => void;
};

const studentController: StudentController = {
  getAllStudents: async (req, res, next) => {
    try {
      const students = await Student.find();

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Success get all data students',
        data: students,
      });
    } catch (error) {
      next(error);
    }
  },
  getStudentById: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;
      const student = await Student.findById(id);

      if (!student) {
        throw new AppError(404, 'Student Not Found');
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Success get all data students',
        data: student,
      });
    } catch (error) {
      next(error);
    }
  },
  createStudent: async (req, res, next) => {
    try {
      const payload: CreateStudentDTO = req.body;

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
  updateStudent: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;

      const payload: UpdateStudentDTO = req.body;

      const updatedStudent: IStudentDocument | null =
        await Student.findByIdAndUpdate(
          id,
          {
            $set: payload,
          },
          {
            new: true,
            runValidators: true,
          }
        );

      if (!updatedStudent) {
        throw new AppError(404, 'Student not found');
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly updated data',
        data: updatedStudent,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteStudent: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;

      const deletedStudent: IStudentDocument | null =
        await Student.findByIdAndDelete(id);

      if (!deletedStudent) {
        throw new AppError(404, 'Student not found');
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly delete data',
        data: deletedStudent,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default studentController;
