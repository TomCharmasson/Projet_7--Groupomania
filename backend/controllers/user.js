const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const token = require("../middleware/auth");
const pathImage = `/images/profile/`;

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
        avatar: `${req.protocol}://${req.get("host")}/images/profile/default-profile.jpg`,
      })
        .then((newUser) =>
          res.status(200).json({
            token: jwt.sign({ user: newUser }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" }),
            user: newUser,
          })
        )
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
            token: jwt.sign({ user: user }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" }),
            user: user,
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
  return getUserById(req.params.id, req, res);
};

exports.updateUser = async (req, res, next) => {
  return updateUser(req.params.id, req, res, next);
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

const getUserById = async (id, req, res) => {
  try {
    const user = await db.User.findOne({
      where: { id: id },
    });
    if (user !== null) {
      return res.status(200).json({ user });
    } else {
      return res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    return res.status(500).send({ error: "An error occured" });
  }
};

const updateUser = async (id, req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: id },
    });
    if (user !== null) {
      imageUrl = null;
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get("host")}/images/profile/${req.file.filename}`;
      }
      await user.update({
        avatar: imageUrl,
      });
      res.status(200).send({ message: "User updated", user: user });
    } else {
      res.status(400).send({ error: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.getMe = async (req, res, next) => {
  return getUserById(token.getUserId(req), req, res);
};

exports.updateMe = async (req, res, next) => {
  return updateUser(token.getUserId(req), req, res, next);
};
