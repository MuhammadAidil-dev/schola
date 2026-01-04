import { Router } from 'express';
import { subjectController } from '../../controllers/subject/subjectController';
import {
  authenticate,
  authenticateRole,
} from '../../middleware/authMiddleware';

const route = Router();

route.get('/', subjectController.getAllSubject);
route.get('/:id', subjectController.getSubjectById);
route.post(
  '/',
  authenticate,
  authenticateRole('admin'),
  subjectController.createSubject
);
route.put('/:id', subjectController.updateSubject);
route.delete('/:id', subjectController.deleteSubject);

export default route;
