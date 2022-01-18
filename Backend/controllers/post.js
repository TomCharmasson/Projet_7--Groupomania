const models = require("../models/database")

// Import models
const Post = models.posts
const Comment = models.comments
const User = models.users

// Tous les posts
exports.findAllPosts = (req, res, next) => {
    Post.findAll({
        include: {
            model: User,
            required: true,
            attributes: ["userName", "avatar", "isActive"]
        },
        order: [["id", "DESC"]]
    })
    .then(posts => {
        const PostsList = posts.map(post => {
            return Object.assign({},
                {
                    id: post.id,
                    createdAt: post.createdAt,
                    post: post.post,
                    postUrl: post.postUrl,
                    UserId: post.UserId,
                    userName: post.User.userName,
                    avatar: post.User.avatar,
                    isActive: post.User.isActive
                }
            )
        })
        res.status(200).json({ PostsList })
    })
    .catch(error => res.status(400).json({ error }))
}

// Tous les posts d'un utilisateur
exports.findAllPostsForOne = (req, res, next) => {
    Post.findAll({
        where: { UserId: req.params.id },
        include: {
            model: User,
            required: true,
            attributes: ["userName", "avatar", "isActive"]
        },
        order: [["id", "DESC"]]
    })
    .then(posts => {
        const PostsList = posts.map(post => {
            return Object.assign({},
                {
                    id: post.id,
                    createdAt: post.createdAt,
                    post: post.post,
                    postUrl: post.postUrl,
                    UserId: post.UserId,
                    userName: post.User.userName,
                    avatar: post.User.avatar,
                    isActive: post.User.isActive
                }
            )
        })
        res.status(200).json({ PostsList })
    })
    .catch(error => res.status(400).json({ error }))
}

// Un seul post
exports.findOnePost = (req, res, next) => {
    const onePost = {}
    Post.findOne({ 
        where: { id: req.params.id },
        include: {
            model: User,
            required: true,
            attributes: ["userName", "avatar", "isActive"] 
        }
    })
    .then(post => {
        onePost.id = post.id
        onePost.userId = post.UserId
        onePost.avatar = post.User.avatar
        onePost.userName = post.User.userName
        onePost.isActive = post.User.isActive
        onePost.createdAt = post.createdAt
        onePost.post = post.post
        onePost.postUrl = post.postUrl
    })
    .then(() => {
        Comment.count({ where: { PostId: req.params.id }})
        .then(commentCount => {
            onePost.commentaire = commentCount
            res.status(200).json(onePost)
        })
    })
    .catch(error => res.status(404).json({ error }))
}

// Créer un post
exports.createPost = (req, res, next) => {
    let varImage =""
    if (req.file) { varImage = `${req.protocol}://${req.get("host")}/images/${req.file.filename}` }
    const post = new Post(
        {
            UserId: req.body.UserId,
            post: req.body.post,
            postUrl: varImage
        }
    )
    post.save()
        .then((retour) => res.status(201).json({ message: "Post créé ! ✅" }))
        .catch(error => res.status(400).json({ error }))
}

// Modifier un post
exports.modifyPost = (req, res, next) => {
    const postContent = req.file ?
      {
        ...req.body.post,
        postUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      } : { ... req.body}

    Post.update({ ...postContent, id:  req.params.id}, { where: { id: req.params.id }})
    .then(() => res.status(200).json({ message: "Post modifié ! ✅ ✍️" }))
    .catch(error => res.status(400).json({ error }))
}

// Supprimer un post
exports.deletePost = (req, res, next) => {
  Post.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: "Post supprimé ! ❌ 🗑" }))
        .catch(error => res.status(400).json({ error }))
}