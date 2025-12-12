import { Router } from 'express';
import studentRoutes from './students/studentsRoute';
import gradeClassRoutes from './gradeClass/gradeClassRoute';
import teacherRoutes from './teacher/teacherRoute';
import subjectRoutes from './subject/subjectRoute';
const routes = Router();

routes.use('/students', studentRoutes);
routes.use('/grade-class', gradeClassRoutes);
routes.use('/teachers', teacherRoutes);
routes.use('/subjects', subjectRoutes);

export default routes;
