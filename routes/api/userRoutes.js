const router = require("express").Router();
//fill in import with function names from userController.js
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");
//http://localhost:3001/api/users
//set up logic in controllers directory, import here

// http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser);

module.exports = router;
