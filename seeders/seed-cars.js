const db = require("../models");

db.Car.create([
  {
    year: 2015,
    make: "Lexus",
    model: "IS250",
    trim: "F-Sport",
    // pic: "/images/large.jpg",
  },
  //   {
  //     name: "Coding Cat Cafe",
  //     city: "Phoenix",
  //     state: "AZ",
  //     cuisines: "Coffee, Bakery",
  //     pic: "/images/the-interior.jpg",
  //     founded: 2020,
  //   },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
