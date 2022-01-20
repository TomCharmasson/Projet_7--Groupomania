const express = require("express");
const router = express.Router();

// Controller import
const userCtrl = require("../controllers/user");

// Middlewares imports
const auth = require("../middleware/auth");

// Routes for user
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

router.get("/users", auth.isAdmin, userCtrl.getAllUsers);
router.get("/users/:id", auth.isAdmin, userCtrl.getUser);
router.put("/users/:id", auth.isAdmin, userCtrl.updateUser);
router.delete("/users/:id", auth.isAdmin, userCtrl.deleteUser);

module.exports = router;
