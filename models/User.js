const { Schema, model } = require("mongoose");

//User model Schema
const userSchema = new Schema(
  {
    //first object here consists of indexes

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //make sure is valid email
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please use a valid email address",
      ],
    },
    //needs to reference Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//needs to reference the length of self's friends array
userSchema
  .virtual("friendCount")
  //Getter
  .get(function () {
    return `${this.friends.length}`;
  });

//init User model
const User = model("user", userSchema);

module.exports = User;
