import { NextFunction, Request, Response } from 'express';
import {
  CreateSubjectDTO,
  ISubject,
  UpdateSubjectDTO,
} from '../../types/subject/subjectType';
import Subject from '../../models/subjectModel';
import { httpCode } from '../../config/http';
import { createLessonCode } from '../../utils/utils';
import AppError from '../../utils/appError';

type SubjectController = {
  createSubject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  getAllSubject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  getSubjectById: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  updateSubject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  deleteSubject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
};

export const subjectController: SubjectController = {
  createSubject: async (req, res, next) => {
    try {
      const payload: CreateSubjectDTO = {
        ...req.body,
        lessonCode: createLessonCode(),
      };

      const subject = await Subject.create(payload);

      return res.status(httpCode.CREATED).json({
        status: 'success',
        message: 'Successfuly created data',
        data: subject,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllSubject: async (req, res, next) => {
    try {
      const subjectData: ISubject[] | [] = await Subject.find();

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get all data',
        data: subjectData,
      });
    } catch (error) {
      next(error);
    }
  },
  getSubjectById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const subjectData: ISubject | null = await Subject.findById(id);

      if (!subjectData) {
        return next(new AppError(404, 'Data not found'));
      }

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get data',
        data: subjectData,
      });
    } catch (error) {
      next(error);
    }
  },
  updateSubject: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload: UpdateSubjectDTO = req.body;

      const subjectData = await Subject.findByIdAndUpdate(
        id,
        {
          $set: payload,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!subjectData) {
        return next(new AppError(404, 'Data not found'));
      }
      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly updated data',
        data: subjectData,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteSubject: async (req, res, next) => {
    try {
      const { id } = req.params;

      const subjectData = await Subject.findByIdAndDelete(id);

      if (!subjectData) {
        return next(new AppError(404, 'Data not found'));
      }
      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly deleted data',
        data: subjectData,
      });
    } catch (error) {
      next(error);
    }
  },
};
