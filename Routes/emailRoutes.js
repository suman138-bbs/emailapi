import express from 'express';
import { getEmail } from '../controllers/getmailController';
const router = express.Router();

router.get('/get-email', getEmail)

export default router;
