import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_COMPASS_URI);

    console.log("connexion successfully with MongoDB ...");
  } catch (err) {
    console.log(err);
    console.log("connexion failed with Database");
    process.exit();
  }
};

export default ConnectDB;
