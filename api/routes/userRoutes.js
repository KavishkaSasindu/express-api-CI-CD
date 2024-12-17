const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/create", UserController.createUser);
router.get("/get", UserController.getAllUser);

module.exports = router;
