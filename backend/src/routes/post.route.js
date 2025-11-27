import { Router } from "express";
import { createPost, Posts, updatePosts,deletePost } from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(Posts);
router.route("/update/:id").patch(updatePosts);
router.route("/delete/:id").delete(deletePost);

export default router;
