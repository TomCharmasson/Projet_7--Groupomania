// Import packages
const express = require("express");
const path = require("path");
const helmet = require("helmet"); // Sécuriser l'app Express en définissant divers en-têtes HTTP
const { sequelize } = require("./models");  // ORM qui permet de mapper les classes métier avec les tables d'un SGBDR en JavaScript

// Import routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

// Create express app
const app = express();

app.use(express.json());

app.use(helmet());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// Uploaded images goes here
app.use("/images", express.static(path.join(__dirname, "images")));

// Use routes
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

// Using sequelize to connect to the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced 🛢⚡︎🔄 ");
  } catch (exception) {
    console.error("Cannot connect to the Database :", exception);
  }
};

syncDatabase();

module.exports = app;
