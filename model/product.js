import Mongoose from "mongoose";

const productSchame = Mongoose.Schema(
  {
    title: {
      type: String,
      strim: true,
      required: true,
      maxLength: 32,
    },
    description: {
      type: String,
      strim: true,
      required: true,
      maxLength: 32,
    },
    image: {
        type: String,
        strim: true,
        required:true,
        maxLength:32
    },
    author: {
        type: String,
        strim: true,
        required:true,
        maxLength:32
    }
  },
  { timestamps: true }
);

module.exports = Mongoose.model("product", productSchame);
