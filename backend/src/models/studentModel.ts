import { model, Schema } from 'mongoose';
import {
  GenderType,
  IStudentDocument,
  StatusType,
} from '../types/student/studentType';

const StudentSchema = new Schema<IStudentDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    nisn: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: Object.values(GenderType),
      required: true,
    },
    birthOfDate: { type: Date, required: true },
    placeOfBirth: { type: String, required: true },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    academicData: {
      status: {
        type: String,
        default: 'active',
        enum: Object.values(StatusType),
      },
      entryYear: {
        type: String,
        required: true,
      },
      yearOut: {
        type: String,
      },
      studentClass: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
      },
    },
    parentData: {
      fatherName: {
        type: String,
      },
      motherName: {
        type: String,
      },
      parentPhoneNumber: String,
      parentAddress: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Student = model<IStudentDocument>('Student', StudentSchema);

export default Student;
