const fs = require("fs");
const db = require("../models");
const token = require("../middleware/auth");


exports.likePost = async (req, res) => {
    try {
      const post = await db.Post.findOne({
        where: {
          id: req.params.id,
        },
      });
      const userId = token.getUserId(req);
      const user = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      const like = await db.Like.findOne({
        where: {
          PostId: post.id,
          UserId: user.id,
        },
      });
      if (like === null) {
        await db.Like.create({
          PostId: post.id,
          UserId: user.id,
        });
        res.status(200).send({ message: "Post liked" });
      } else {
        await like.destroy();
        res.status(200).send({ message: "Post unliked" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "An error occured" });
    }
  };
  
  