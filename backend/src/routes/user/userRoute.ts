import { Router } from 'express';
import userController from '../../controllers/user/userController';

const route = Router();

route.post('/auth/register', userController.register);
route.post('/auth/login', userController.login);
route.post('/auth/logout', userController.logout);

export default route;
