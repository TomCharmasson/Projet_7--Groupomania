const express = require("express")
const router = express.Router()

// Controllers import
const userCtrl = require("../controllers/user")
const multer = require("../middleware/multer-config")

// Routes for user
router.get("/:id", userCtrl.findOneUser)
router.put("/:id", multer, userCtrl.modifyUser)

module.exports = router