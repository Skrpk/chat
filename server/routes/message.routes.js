import { Router } from 'express';
import * as MessageController from '../controllers/message.controller';
const router = new Router();

// Get all Posts
router.route('/messages').get(MessageController.getMessages);

export default router;
