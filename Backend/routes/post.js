const express = require("express")
const router = express.Router()

// Controllers import
const postCtrl = require("../controllers/post")
const multer = require("../middleware/multer-config")

// Routes for posts
router.get("/", postCtrl.findAllPosts)
router.get("/users/:id", postCtrl.findAllPostsForOne)
router.get("/:id", postCtrl.findOnePost)
router.post("/", multer, postCtrl.createPost)
router.put("/:id", multer, postCtrl.modifyPost)
router.delete("/:id", postCtrl.deletePost)

module.exports = router