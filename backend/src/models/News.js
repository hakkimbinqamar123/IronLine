const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,
    images: [String],
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
