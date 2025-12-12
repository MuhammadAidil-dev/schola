import { Router } from 'express';
import { subjectController } from '../../controllers/subject/subjectController';

const route = Router();

route.get('/', subjectController.getAllSubject);
route.get('/:id', subjectController.getSubjectById);
route.post('/', subjectController.createSubject);
route.put('/:id', subjectController.updateSubject);
route.delete('/:id', subjectController.deleteSubject);

export default route;
