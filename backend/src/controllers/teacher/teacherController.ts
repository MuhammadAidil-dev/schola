import { NextFunction, Request, Response } from 'express';
import {
  CreateTeacherDTO,
  ITeacher,
  ITeacherDocument,
  UpdateTeacherDTO,
} from '../../types/teacher/teacherType';
import Teacher from '../../models/teacherModel';
import { httpCode } from '../../config/http';
import AppError from '../../utils/appError';

type TeacherController = {
  getAllTeacher: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  getTeacherById: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  createTeacher: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  updateTeacher: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  deleteTeacher: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
};

const teacherController: TeacherController = {
  getAllTeacher: async (req, res, next) => {
    try {
      const teachers: ITeacher[] | [] = await Teacher.find();

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get all data',
        data: teachers,
      });
    } catch (error) {
      next(error);
    }
  },
  getTeacherById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const teacherData: ITeacher | null = await Teacher.findById(id);

      if (!teacherData) {
        return next(new AppError(404, 'data teacher not found'));
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get data',
        data: teacherData,
      });
    } catch (error) {
      next(error);
    }
  },
  createTeacher: async (req, res, next) => {
    try {
      const payload: CreateTeacherDTO = req.body;

      const teacher: ITeacherDocument = await Teacher.create(payload);

      return res.status(httpCode.CREATED).json({
        status: 'success',
        message: 'Successfuly created data',
        data: teacher,
      });
    } catch (error) {
      next(error);
    }
  },
  updateTeacher: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload: UpdateTeacherDTO = req.body;

      const teacherUpdate: ITeacherDocument | null =
        await Teacher.findByIdAndUpdate(
          id,
          {
            $set: payload,
          },
          {
            new: true,
            runValidators: true,
          }
        );

      if (!teacherUpdate) {
        return next(new AppError(404, 'data teacher not found'));
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly update data',
        data: teacherUpdate,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteTeacher: async (req, res, next) => {
    try {
      const { id } = req.params;

      const teacherData: ITeacherDocument | null =
        await Teacher.findByIdAndDelete(id);

      if (!teacherData) {
        return next(new AppError(404, 'data teacher not found'));
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly delete data',
        data: teacherData,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default teacherController;
