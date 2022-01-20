const express = require("express");
const router = express.Router();

// Middlewares imports
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Controllers imports
const postCtrl = require("../controllers/post");
const commentCtrl = require("../controllers/comment");
const likeCtrl = require("../controllers/like");

// Routes
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getPost);
router.post("/createpost", auth, multer, postCtrl.createPost);
router.put("/updatepost/:id", auth, multer, postCtrl.updatePost);
router.delete("/deletepost/:id", auth, postCtrl.deletePost);

router.post("/like/:id", auth, likeCtrl.likePost);

router.post("/comment/:id", auth, commentCtrl.commentPost);
router.delete("/deletecomment/:id", auth, commentCtrl.deleteComment);

module.exports = router;
