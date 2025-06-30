require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth"));
const roadmapRoutes = require("./routes/roadmap");
app.use("/api", roadmapRoutes);
// endpoint to fetch latest roadmap
const Roadmap = require("./models/roadmap");  // make sure you have this
app.get("/api/roadmap/latest", async (req, res) => {
  try {
    const latest = await Roadmap.findOne().sort({ _id: -1 });
    res.json(latest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
  console.log("GET / route was called");
});

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(" Connected to MongoDB");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
