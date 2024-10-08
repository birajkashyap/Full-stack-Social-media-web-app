const mongoose = require("mongoose");

// Friend Request Schema
const friendRequestSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);

module.exports = { FriendRequest };
