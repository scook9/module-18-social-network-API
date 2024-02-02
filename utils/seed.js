const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  //delete users collection if exists
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  //delete thoughts collection if exists
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  //array of users to push to user table
  const users = [
    {
      username: "TestUser",
      email: "testuser@hotmail.com",
    },
  ];
  //array of thoughts to push to thoughts table
  const thoughts = [
    {
      reactionBody: "Test reaction",
      username: "TestUser",
    },
  ];

  //add logic to populate both arrays

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
