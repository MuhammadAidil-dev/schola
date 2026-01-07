export type StatusType = 'active' | 'passed' | 'out';

type StudentClassType = {
  classLevel: string;
  className: string;
  description: string;
  studyProgram: string;
  _id: string;
};

type AcademicType = {
  status: StatusType;
  entryYear: string;
  yearOut?: string;
  studentClass: StudentClassType;
};

// type ParentType = {
//   fatherName: string;
//   motherName: string;
//   parentPhoneNumber?: string;
//   parentAddress: string;
// };

export interface IStudent {
  _id: string;
  fullname: string;
  nisn: string;
  gender: string;
  birthOfDate: string;
  placeOfBirth: string;
  address: string;
  email: string;
  phoneNumber: string;
  academicData: AcademicType;
}

export type CreateStudentDTO = Omit<IStudent, '_id'>;
