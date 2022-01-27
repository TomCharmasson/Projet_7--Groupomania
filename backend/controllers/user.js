const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const token = require("../middleware/auth");

// Inscription d'un utilisateur
exports.signup = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (user !== null) {
      if (user.username === req.body.username) {
        return res.status(400).json({ error: "This username already exist" });
      }
    } else {
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        admin: false,
      })
        .then(() => res.status(201).json({ message: "User created ! ✅ 👌" }))
        .catch((error) => res.status(400).json({ error }));
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error });
  }
};

// Connexion d'un utilisateur
exports.login = async (req, res, next) => {
  await db.User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "User not found ! ❌ 🤷‍♂️" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "User or password not found ! ❌ 🙅‍♂️" });
          }
          res.status(200).json({
            token: jwt.sign(
              { user: user },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "24h" }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await db.User.findAll();
    if (users !== null) {
      res.status(200).json({ users });
    } else {
      res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.params.id },
    });
    if (user !== null) {
      res.status(200).json({ user });
    } else {
      res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: token.getUserId(req) },
    });
    if (user !== null) {
      imageUrl = null;
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
      }
      await user.update({
        email: req.body.email,
        avatar: imageUrl,
      });
      res.status(200).send({ message: "User updated" });
    } else {
      res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.params.id },
    });
    if (user !== null) {
      await user.destroy();
      res.status(200).send({ message: "User deleted" });
    } else {
      res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};
