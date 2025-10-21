import { Router } from 'express';
import studentRoutes from './students/studentsRoute';
const routes = Router();

routes.use('/students', studentRoutes);

export default routes;
