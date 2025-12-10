import { model, Schema } from 'mongoose';
import { ITeacherDocument } from '../types/teacher/teacherType';
import { GenderType } from '../types/student/studentType';

const TeacherSchema = new Schema<ITeacherDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    nip: {
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
    status: {
      type: String,
      enum: ['active', 'non active'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = model<ITeacherDocument>('Teacher', TeacherSchema);

export default Teacher;
