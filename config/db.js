const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://TSIL:CzDZJdXu9WoT73UL@cluster0.5acaggl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongo db connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;

// CzDZJdXu9WoT73UL
// TSIL