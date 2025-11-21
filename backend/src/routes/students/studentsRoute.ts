import { Router } from 'express';
import studentController from '../../controllers/students/studentController';
import { validateRequest } from '../../middleware/validationMiddleware';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../../lib/joi/studentValidations';
import {
  CreateStudentDTO,
  UpdateStudentDTO,
} from '../../types/student/studentType';

const route = Router();

route.get('/', studentController.getAllStudents);
route.get('/:id', studentController.getStudentById);
route.post(
  '/',
  validateRequest<CreateStudentDTO>(createStudentSchema),
  studentController.createStudent
);
route.put(
  '/:id',
  validateRequest<UpdateStudentDTO>(updateStudentSchema),
  studentController.updateStudent
);
route.delete('/:id', studentController.deleteStudent);

export default route;
