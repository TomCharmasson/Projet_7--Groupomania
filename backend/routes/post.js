const express = require("express");
const router = express.Router();

// Middlewares imports
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Controllers imports
const postCtrl = require("../controllers/post");

// Routes
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getPost);
router.post("/", auth, multer, postCtrl.createPost);
router.put("/:id", auth, multer, postCtrl.updatePost);
router.delete("/:id", auth, postCtrl.deletePost);


module.exports = router;
