import { Document } from 'mongoose';

export enum ClassLevelType {
  X = 'X',
  XI = 'XI',
  XII = 'XII',
}

export enum StudyProgramType {
  IPA = 'IPA',
  IPS = 'IPS',
}

export interface IGradeClass {
  _id: string;
  className: string;
  classLevel: ClassLevelType;
  studyProgram: StudyProgramType;
  description?: string;
}

export interface IGradeClassDocument
  extends Omit<IGradeClass, '_id'>,
    Document {}

export type CreateGradeClassDTO = Omit<IGradeClass, '_id'>;
export type UpdateGradeClassDTO = Partial<IGradeClass>;
