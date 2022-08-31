const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// placeSchema.methods.showEstablished = function () {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
// };

module.exports = mongoose.model("Account", placeSchema);
