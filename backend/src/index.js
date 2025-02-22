import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("express error", error);
    });
  })
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!! ", err);
    process.exit(1);
  });
