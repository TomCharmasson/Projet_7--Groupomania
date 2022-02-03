const express = require("express");
const router = express.Router();

// Middlewares imports
const auth = require("../middleware/auth");

// Controllers imports
const likeCtrl = require("../controllers/like");

// Routes
router.post("/", auth, likeCtrl.likePost);


module.exports = router;