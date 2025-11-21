import { Router } from 'express';
import studentController from '../../controllers/students/studentController';

const route = Router();

route.get('/', studentController.getAllStudents);
route.post('/', studentController.createStudent);
route.put('/:id', studentController.updateStudent);
route.delete('/:id', studentController.deleteStudent);

export default route;
