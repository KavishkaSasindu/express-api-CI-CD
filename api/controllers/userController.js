const UserModel = require("../models/userModel");

const createUser = async (request, response) => {
  try {
    const userData = await request.body;
    const newUser = await UserModel.create(userData);
    if (!newUser) {
      return response.status(404).json({
        message: "user is not created",
      });
    }
    return response.status(201).json({
      message: "User is created",
      data: newUser,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const getAllUser = async (request, response) => {
  try {
    const allUSers = await UserModel.find();
    if (!allUSers) {
      return response.status(404).json({
        message: "No users found in db",
      });
    }
    return response.status(200).json({
      message: "Users are fetching",
      data: allUSers,
    });
  } catch (error) {
    return response.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { createUser, getAllUser };
