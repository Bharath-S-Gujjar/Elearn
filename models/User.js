const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

// Ensure the model is not recompiled if already exists
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User; // ✅ Correctly export the model
