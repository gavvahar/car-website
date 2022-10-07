const db = require("../models");

db.Car.create([
  {
    year: 2015,
    make: "Lexus",
    model: "IS250",
    trim: "F-Sport",
    pic: "/images/pic.jpg",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
