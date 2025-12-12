import { Router } from 'express';
import teacherController from '../../controllers/teacher/teacherController';

const route = Router();

route.get('/', teacherController.getAllTeacher);
route.get('/:id', teacherController.getTeacherById);
route.post('/', teacherController.createTeacher);
route.put('/:id', teacherController.updateTeacher);
route.delete('/:id', teacherController.deleteTeacher);

export default route;
