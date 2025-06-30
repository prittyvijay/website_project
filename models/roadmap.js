






const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema({
  name: String,
  dob: String,
  currentClass: String,
  interest: String,
  skills: String,
  hobbies: String,
  recommendation: [String],   // <== new field
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
