import { Document } from 'mongoose';
import { GenderType } from '../student/studentType';

type TeacherStatus = 'active' | 'non active';

export interface ITeacher {
  _id: string;
  fullname: string;
  nip: string;
  gender: GenderType;
  birthOfDate: Date;
  address: string;
  email: string;
  phoneNumber: string;
  status: TeacherStatus;
}

export interface ITeacherDocument extends Omit<ITeacher, '_id'>, Document {}
export type CreateTeacherDTO = Omit<ITeacher, 'id'>;
export type UpdateTeacherDTO = Partial<ITeacher>;
