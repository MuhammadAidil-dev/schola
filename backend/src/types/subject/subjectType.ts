import { Document } from 'mongoose';

export interface ISubject {
  _id: string;
  lessonCode: string;
  nameOfSubject: string;
  description: string;
}

export interface ISubjectDocument extends Omit<ISubject, '_id'>, Document {}
export type CreateSubjectDTO = Omit<ISubject, '_id'>;
export type UpdateSubjectDTO = Partial<ISubject>;
