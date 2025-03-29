import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post('/register', userController.register);
router.get('/:userId', userController.getNewUser)

export default router;
