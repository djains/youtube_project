import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    channelName: {type: String, required: true },
    userName: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true }

},{
    timestamps: true
});
const User = mongoose.model("User", userSchema);
export default User;