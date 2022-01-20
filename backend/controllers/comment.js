const fs = require("fs");
const db = require("../models");
const token = require("../middleware/auth");

exports.commentPost = async (req, res) => {
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
      const comment = await db.Comment.create({
        message: req.body.message,
        PostId: post.id,
        UserId: user.id,
      });
      res.status(200).send({ comment: comment, message: "Comment created" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "An error occured" });
    }
  };
  
  exports.deleteComment = async (req, res) => {
    try {
      const comment = await db.Comment.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (comment.UserId === token.getUserId(req)) {
        await comment.destroy();
        res.status(200).send({ message: "Comment deleted" });
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "An error occured" });
    }
  };
  
  exports.updateComment = async (req, res) => {
    try {
      const comment = await db.Comment.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (comment.UserId === token.getUserId(req)) {
        await comment.update({
          message: req.body.message,
        });
        res.status(200).send({ message: "Comment updated" });
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "An error occured" });
    }
  };