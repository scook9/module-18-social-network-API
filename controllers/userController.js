const User = require("../models/User");

module.exports = {
  //get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get one user by _id and populate thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      ); //version control for Mongoose, don't worry about it

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //post a new user with username and email
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //put to update user by _id
  async updateUser(req, res) {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        req.body
      );
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //delete to remove user by _id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.deleteOne({ _id: req.params.userId });
      res.json(deletedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //post to add new friend to user's friend list
  async addFriend(req, res) {
    try {
      const friend = await User.findOne({ _id: req.params.friendId });

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { friends: friend }
        //instead of { friends: friend }, could also pass req.params.friendId
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
