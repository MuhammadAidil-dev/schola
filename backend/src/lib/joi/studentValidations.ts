import Joi from 'joi';

export const createStudentSchema = Joi.object({
  fullname: Joi.string().trim().required(),
  nisn: Joi.string().trim().required(),
  gender: Joi.string().valid('male', 'female').required(),
  birthOfDate: Joi.date().required(),
  placeOfBirth: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),

  academicData: Joi.object({
    status: Joi.string().valid('active', 'inactive').default('active'),
    entryYear: Joi.string().required(),
    yearOut: Joi.string().default('-'),
    studentClass: Joi.string().required(),
  }),

  parentData: Joi.object({
    fatherName: Joi.string(),
    motherName: Joi.string(),
    parentPhoneNumber: Joi.string(),
    parentAddress: Joi.string(),
  }),
});

export const updateStudentSchema = Joi.object({
  fullname: Joi.string().trim().optional(),
  nisn: Joi.string().trim().optional(),
  gender: Joi.string().valid('male', 'female').optional(),
  birthOfDate: Joi.date().optional(),
  placeOfBirth: Joi.string().trim().optional(),
  address: Joi.string().trim().optional(),
  email: Joi.string().email().optional(),
  phoneNumber: Joi.string().optional(),

  academicData: Joi.object({
    status: Joi.string().valid('active', 'inactive'),
    entryYear: Joi.string().optional(),
    yearOut: Joi.string(),
    studentClass: Joi.string().optional(),
  }),

  parentData: Joi.object({
    fatherName: Joi.string(),
    motherName: Joi.string(),
    parentPhoneNumber: Joi.string(),
    parentAddress: Joi.string(),
  }),
});
