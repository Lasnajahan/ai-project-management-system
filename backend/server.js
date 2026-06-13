const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// DB CONNECT

  

// ROUTES
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server Running ✔");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("SERVER FILE LOADED ✔");
  console.log("Server running on port", PORT);
});