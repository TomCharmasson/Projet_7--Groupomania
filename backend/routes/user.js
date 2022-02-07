const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

// Controller import
const userCtrl = require("../controllers/user");

// Middlewares imports
const auth = require("../middleware/auth");

// Routes for user
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

router.get("/users", auth.isAdmin, userCtrl.getAllUsers);
router.get("/users/:id", auth.isAdmin, userCtrl.getUser);
router.put("/users/:id", auth.isAdmin, multer, userCtrl.updateUser);
router.delete("/users/:id", auth.isAdmin, userCtrl.deleteUser);

router.get("/user/me", auth, userCtrl.getMe);
router.put("/user/me", auth, multer, userCtrl.updateMe);

module.exports = router;
