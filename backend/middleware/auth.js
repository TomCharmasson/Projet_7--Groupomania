const jwt = require("jsonwebtoken");

// Middleware to check if the user is authenticated
module.exports = (req, res, next) => {
  try {
    const userId = getUserId(req);
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID ! ❌ 🙅‍♂️";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request ! ❌ 🤷‍♂️"),
    });
  }
};

function getUserId(req, res, next) {
  // on vérifie le userId du token
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); // on le vérifie
      const userId = decodedToken.user.id;
      return userId; // on récupère l'id du token
    } else {
      throw "Invalid request ! ❌ 🤷‍♂️";
    }
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request ! ❌ 🤷‍♂️"),
    });
  }
}

function isAdmin(req, res, next) {
  // on vérifie si l'utilisateur est admin
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); // on le vérifie
      if (decodedToken.user.admin) {
        next();
      }
    } else {
      res.status(401).json({
        error: new Error("Invalid request ! ❌ 🤷‍♂️"),
      });
    }
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request ! ❌ 🤷‍♂️"),
    });
  }
}

module.exports.getUserId = getUserId;
module.exports.isAdmin = isAdmin;
