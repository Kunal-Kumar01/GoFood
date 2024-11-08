// db.js
const mongoose = require('mongoose');
const connectURL = "mongodb+srv://GoFoodMern:GoFoodMern@gofoodmern.6vv8a.mongodb.net/?retryWrites=true&w=majority&appName=GoFoodMern";

async function connectToDatabase() {
  try {
    await mongoose.connect(connectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if the connection fails
  }
}

module.exports = connectToDatabase;
