import express from 'express';
import { login, signup } from '../controllers/auth.controller.js';
const router = express.Router();
router.use(express.json());

router.post("/signup",signup)
router.post("/login",login)
export default router;