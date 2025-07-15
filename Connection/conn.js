import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/youtubebackend").then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});