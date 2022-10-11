const mongoose = require("mongoose");

let carSchema = new mongoose.Schema({
  year: {
    type: Number,
    min: [1673, "Surely not that old?!"],
    max: [new Date().getFullYear(), "This is the future!"],
    required: true,
  },
  make: { type: String, required: true },
  model: { type: String, required: true },
  pic: { type: String, default: "/images/pic.jpg" },
  trim: { type: String, default: "N/A" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Car", carSchema);
