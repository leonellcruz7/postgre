require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`ap is running ion port ${port}`));
