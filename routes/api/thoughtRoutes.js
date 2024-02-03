const router = require("express").Router();
//fill in import with function names from userController.js
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

//http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

//http://localhost:3001/api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").get();

module.exports = router;
