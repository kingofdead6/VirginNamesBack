import express from 'express';
import { loginOrSignup } from '../controllers/authController.js';

const router = express.Router();

router.post('/', loginOrSignup);

export default router;