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
