import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

export default router;