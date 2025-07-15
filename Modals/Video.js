import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
title: { type: String, required: true },
description: { type: String, required: true },

videoLink: { type: String, required: true },
 
likes: { type: Number, default: 0 },
dislike: { type: Number, default: 0 }


},{    timestamps: true
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
