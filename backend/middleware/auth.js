const jwt = require("jsonwebtoken");

// Middleware to check if the user is authenticated
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId
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

module.exports.getUserId = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.user.id;
      return userId;
    } else {
      throw "Invalid request ! ❌ 🤷‍♂️";
    }
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request ! ❌ 🤷‍♂️"),
    });
  }
}

module.exports.isAdmin = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken);
      if (decodedToken.user.admin) {
        next();
      } else {
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

