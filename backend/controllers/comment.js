const fs = require("fs");
const db = require("../models");
const token = require("../middleware/auth");

// ! Fix this 
// exports.getAllComments = async (req, res) => {
//   try {
//     const posts = await db.Post.findAll({
//       attributes: ["id", "message", "image", "createdAt"],
//       order: [["createdAt", "DESC"]],
//       include: [
//         {
//           model: db.User,
//           attributes: ["username", "id", "avatar"],
//         },
//         {
//           model: db.Like,
//           attributes: ["UserId"],
//         },
//         {
//           model: db.Post,
//           attributes: ["message", "UserId", "id"],
//           order: [["createdAt", "DESC"]],
//           include: [
//             {
//               model: db.User,
//               attributes: ["avatar", "username"],
//             },
//           ],
//         },
//       ],
//     });
//     res.status(200).send(posts);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       error: "An error occured",
//     });
//   }
// };




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