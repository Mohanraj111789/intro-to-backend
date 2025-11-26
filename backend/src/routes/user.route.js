import { Router } from "express";
import { registerUser,loginUser } from "../controllers/user.controller.js";

const router = Router();

// POST /api/users/register
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);


export default router;
