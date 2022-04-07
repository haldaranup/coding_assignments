const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // first_name, last_name, email, pincode, age, gender,
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
},
{
    timestamps: true
});

const User = mongoose.model("user", userSchema)
module.exports = User
