export enum StatusType {
  active = 'active',
  passed = 'passed',
  out = 'out',
}

// type AcademicType = {
//   status: StatusType;
//   entryYear: string;
//   yearOut?: string;
//   studentClass: string;
// };

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
  // academicData: AcademicType;
}
