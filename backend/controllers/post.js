const fs = require("fs");
const db = require("../models");
const token = require("../middleware/auth");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({ // findAll permet de récupérer toutes les données de la table Post
      attributes: ["id", "message", "image", "createdAt"], // on récupère les champs id, message, image et createdAt
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: db.User,
          attributes: ["username", "id", "avatar"],
        },
        {
          model: db.Like,
          attributes: ["UserId"],
        },
        {
          model: db.Comment,
          attributes: ["message", "UserId", "id"],
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: db.User,
              attributes: ["avatar", "username"],
            },
          ],
        },
      ],
    });
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "An error occured",
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await db.Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "message", "image", "createdAt"],
      include: [
        {
          model: db.User,
          attributes: ["username", "id", "avatar"],
        },
        {
          model: db.Like,
          attributes: ["UserId"],
        },
        {
          model: db.Comment,
          attributes: ["message", "UserId", "id"],

          include: [
            {
              model: db.User,
              attributes: ["avatar", "username"],
            },
          ],
        },
      ],
    });
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "An error occured",
    });
  }
};

exports.createPost = async (req, res) => {
  const userId = token.getUserId(req);
  console.log(userId);
  let imageUrl;
  try {
    const user = await db.User.findOne({
      where: { id: userId },
    });
    if (user !== null) {
      imageUrl = null;
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
      }

      const post = await db.Post.create({
        message: req.body.message,
        image: imageUrl,
        UserId: user.id,
      });
      res.status(201).json({ post: post, messageRetour: "Post created" });
    } else {
      console.log("else");
      res.status(400).send({ error: "An error occured " });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await db.Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (post.UserId === token.getUserId(req)) {
      await post.destroy();
      res.status(200).send({ message: "Post deleted" });
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await db.Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (post.UserId === token.getUserId(req)) {
      await post.update({
        message: req.body.message,
      });
      res.status(200).send({ message: "Post updated" });
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "An error occured" });
  }
};

