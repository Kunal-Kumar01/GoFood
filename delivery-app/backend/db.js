// db.js
const mongoose = require('mongoose');
const connectURL = "mongodb+srv://GoFoodMern:GoFoodMern@gofoodmern.6vv8a.mongodb.net/GoFoodMern?retryWrites=true&w=majority&tls=true&tlsInsecure=true";

const mongoDB = async () => {
  try {
    await mongoose.connect(connectURL); // Removed deprecated options
    console.log("Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const result = await fetched_data.find({}).toArray();
    console.log(result);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
