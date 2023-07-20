const mongoose = require("mongoose");
const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pooja:JlGl1H2e8QzuDR2k@cluster0.tl663c1.mongodb.net/pooja",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = {
  connectMongoDB,
};
