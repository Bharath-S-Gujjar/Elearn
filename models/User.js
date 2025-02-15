const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});
const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = mongoose.model("User", UserSchema);
