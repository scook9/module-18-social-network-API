const { Schema, model } = require("mongoose");

//User model Schema
const userSchema = newSchema({
  //first object here consists of indexes
  username: {
    type: String,
    required: true,
  },
});
