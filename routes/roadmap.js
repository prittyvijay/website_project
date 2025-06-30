// routes/roadmap.js
const express = require("express");
const router = express.Router();
const Roadmap = require("../models/roadmap");

// POST to save roadmap with recommendations
router.post("/roadmap", async (req, res) => {
  try {
    const { name, dob, currentClass, interest, skills, hobbies } = req.body;

    // simple recommendation logic
    let recommendations = [];
    if (interest === "technology") {
      recommendations.push("Software Developer", "AI/ML Engineer", "Data Analyst");
    } else if (interest === "arts") {
      recommendations.push("UI/UX Designer", "Content Creator", "Graphic Designer");
    } else if (interest === "commerce") {
      recommendations.push("Accountant", "Business Analyst", "Financial Planner");
    } else if (interest === "science") {
      recommendations.push("Research Scientist", "Doctor", "Pharmacist");
    } else {
      recommendations.push("Career Counselor", "Mentor");
    }

    const roadmap = new Roadmap({
      name,
      dob,
      currentClass,
      interest,
      skills,
      hobbies,
      recommendation: recommendations,  // <== added
    });

    await roadmap.save();

    res.json({
      message: "Roadmap saved successfully",
      recommendations
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// endpoint to get all roadmaps (optional)
router.get("/roadmaps", async (req, res) => {
  try {
    const data = await Roadmap.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

module.exports = router;
