import { Router } from 'express';
import studentController from '../../controllers/students/studentController';

const route = Router();

route.get('/', studentController.getAllStudents);

export default route;
