import { Document, Types } from 'mongoose';

export enum GenderType {
  male = 'male',
  female = 'female',
}

export enum StatusType {
  active = 'active',
  passed = 'passed',
  out = 'out',
}

type AcademicType = {
  status: StatusType;
  entryYear: string;
  yearOut?: string;
  studentClass: Types.ObjectId;
};

type ParentType = {
  fatherName: string;
  motherName: string;
  parentPhoneNumber?: string;
  parentAddress: string;
};

export interface IStudent {
  _id: string;
  fullname: string;
  nisn: string;
  gender: GenderType;
  birthOfDate: Date;
  placeOfBirth: string;
  address: string;
  email: string;
  phoneNumber: string;
  academicData: AcademicType;
  parentData?: ParentType;
}

export interface IStudentDocument extends Omit<IStudent, '_id'>, Document {}

export type CreateStudentDTO = Omit<IStudent, '_id'>;
export type UpdateStudentDTO = Partial<Omit<IStudent, '_id'>>;
