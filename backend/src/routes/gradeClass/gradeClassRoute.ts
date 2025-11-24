import { Router } from 'express';
import { validateRequest } from '../../middleware/validationMiddleware';
import gradeClassController from '../../controllers/gradeClass/gradeClassController';

const route = Router();

route.get('/', gradeClassController.getAllGradeClass);
route.get('/:id', gradeClassController.getGradeClassById);
route.post('/', gradeClassController.createGradeClass);
route.put('/:id', gradeClassController.updateGradeClass);
route.delete('/:id', gradeClassController.deleteGradeClass);

export default route;
