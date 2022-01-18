const express = require("express")
const router = express.Router()

// Controllers import
const commentCtrl = require("../controllers/comment")

// Routes for comments
router.get("/messages/:id", commentCtrl.findAllComments)
router.get("/:id", commentCtrl.findOneComment)
router.post("/", commentCtrl.createComment)
router.put("/:id", commentCtrl.modifyComment)
router.delete("/:id", commentCtrl.deleteComment)

module.exports = router