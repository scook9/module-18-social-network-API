const Thought = require("../models/Thought");

module.exports = {
  //get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get one thought by _id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //post a new thought with reactionBody and username
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //put to update user by _id
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.updateOne(
        { _id: req.params.thoughtId },
        req.body
      );
      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //delete to remove thought by _id
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.deleteOne({
        _id: req.params.thoughtId,
      });
      res.json(deletedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
