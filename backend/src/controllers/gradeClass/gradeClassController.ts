import { NextFunction, Request, Response } from 'express';
import {
  CreateGradeClassDTO,
  IGradeClass,
  IGradeClassDocument,
  UpdateGradeClassDTO,
} from '../../types/gradeClass/gradeClassType';
import GradeClass from '../../models/gradeClassModel';
import { httpCode } from '../../config/http';
import AppError from '../../utils/appError';

type GradeClassController = {
  createGradeClass: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getAllGradeClass: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getGradeClassById: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  updateGradeClass: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  deleteGradeClass: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
};

const gradeClassController: GradeClassController = {
  createGradeClass: async (req, res, next) => {
    try {
      const payload: CreateGradeClassDTO = req.body;
      const newGradeClass: IGradeClassDocument = await GradeClass.create(
        payload
      );

      res.status(httpCode.CREATED).json({
        status: 'success',
        message: 'Successfuly created data',
        data: newGradeClass,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllGradeClass: async (req, res, next) => {
    try {
      const gradeClassData: IGradeClass[] | [] = await GradeClass.find();

      res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get data',
        data: gradeClassData,
      });
    } catch (error) {
      next(error);
    }
  },
  getGradeClassById: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;

      const gradeClassData: IGradeClass | null = await GradeClass.findById(id);

      if (!gradeClassData) {
        return next(new AppError(404, 'Data grade class not found!'));
      }

      res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly get data',
        data: gradeClassData,
      });
    } catch (error) {
      next(error);
    }
  },
  updateGradeClass: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;

      const payload: UpdateGradeClassDTO = req.body;
      const updatedGradeClass = await GradeClass.findByIdAndUpdate(
        id,
        {
          $set: payload,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedGradeClass) {
        return next(new AppError(404, 'Data grade class not found!'));
      }

      res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly update data',
        data: updatedGradeClass,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteGradeClass: async (req, res, next) => {
    try {
      const { id }: { id?: string } = req.params;

      const gradeClassData = await GradeClass.findByIdAndDelete(id);

      if (!gradeClassData) {
        return next(new AppError(404, 'Data grade class not found!'));
      }

      res.status(httpCode.OK).json({
        status: 'success',
        message: 'Successfuly delete data',
        data: gradeClassData,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default gradeClassController;
