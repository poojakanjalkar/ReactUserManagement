const userModel = require("../models/user.model");

const addUser = async (data) => {
  console.log(data);
  let user = new userModel({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  });
  await userModel.create(user);
};

const getAllUsers = async () => {
  try {
    let userList = await userModel.find();
    console.log(userList);
    return userList;
  } catch (error) {
    console.log("error fetching users:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  let userId = await userModel.findById(id);
  console.log("user by id:", userId);
  return userId;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};
