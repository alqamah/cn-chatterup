// src/routes/authRoutes.js
import express from 'express';
import { loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password, username } = req.body;
  loginUser({ email, password, username }, req.app.get('socket'));
});

export default router;