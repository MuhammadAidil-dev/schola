import { model, Schema } from 'mongoose';
import {
  ClassLevelType,
  IGradeClassDocument,
  StudyProgramType,
} from '../types/gradeClass/gradeClassType';

const GradeClassSchema = new Schema<IGradeClassDocument>(
  {
    className: {
      type: String,
      required: true,
    },
    classLevel: {
      type: String,
      enum: Object.values(ClassLevelType),
      required: true,
    },
    studyProgram: {
      type: String,
      enum: Object.values(StudyProgramType),
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const GradeClass = model<IGradeClassDocument>('GradeClass', GradeClassSchema);
export default GradeClass;
