import mongoose, { Mongoose } from 'mongoose';

const chatSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: String,
    message: String,
    timestamp: Date,
});

export const chatModel = mongoose.model("Chat", chatSchema);
