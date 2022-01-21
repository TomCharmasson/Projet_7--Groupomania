const express = require("express");
const router = express.Router();

// Middlewares imports
const auth = require("../middleware/auth");

// Controllers imports
const commentCtrl = require("../controllers/comment");

// Routes
router.post("/comment/:id", auth, commentCtrl.commentPost);
router.put("/:id", auth, commentCtrl.updateComment);
router.delete("/deletecomment/:id", auth, commentCtrl.deleteComment);


module.exports = router;