const express = require("express")
const router = express.Router()

// Controllers import
const authCtrl = require("../controllers/auth")

// Routes for auth
router.post("/signup", authCtrl.signup)
router.post("/login", authCtrl.login)

module.exports = router