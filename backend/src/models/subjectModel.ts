import { model, Schema } from 'mongoose';
import { ISubjectDocument } from '../types/subject/subjectType';

const SubjectSchema = new Schema<ISubjectDocument>(
  {
    lessonCode: {
      type: String,
      required: true,
      unique: true,
    },
    nameOfSubject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subject = model<ISubjectDocument>('Subject', SubjectSchema);

export default Subject;
