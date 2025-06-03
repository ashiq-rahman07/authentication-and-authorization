import express from 'express';
import { UserControllers } from "./user.controller";
import authenticate from '../../middleware/auth';

const router = express.Router();

router.post('/register',UserControllers.registerUser);
router.get('/my-profile',authenticate(),UserControllers.getProfile);
router.get('/allusers', UserControllers.getAllUsers);
router.get('/:id',UserControllers.getSingleUsers);

export const UserRoutes = router;
