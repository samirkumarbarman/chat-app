import express from "express";
import * as chatController from "../controllers/chatController.js"

const router = express.Router();

router.get('/messages/:conversationId', chatController.getNewMessages);
router.post('/messages', chatController.postNewMessage);
router.post('/conversations', chatController.createNewConversation);

export default router;