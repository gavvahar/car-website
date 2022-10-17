const db = require("../models");

db.Car.create([
  {
    year: 2015,
    make: "Lexus",
    model: "IS250",
    trim: "F-Sport",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2014_Lexus_IS250_F_Sport_Package_LA.jpg/280px-2014_Lexus_IS250_F_Sport_Package_LA.jpg",
  },
  {
    year: 2022,
    make: "Lexus",
    model: "RC350",
    trim: "F-Sport",
    // pic: "/images/pic.jpg",
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
