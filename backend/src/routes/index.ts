import { Router } from 'express';
import studentRoutes from './students/studentsRoute';
import gradeClassRoutes from './gradeClass/gradeClassRoute';
const routes = Router();

routes.use('/students', studentRoutes);
routes.use('/grade-class', gradeClassRoutes);

export default routes;
