const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const addUser = async (data) => {
  console.log(data);
  let user = new userModel({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
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

const login = async (email, password) => {
  console.log("request received");
  const user = await userModel.findOne({ email: email });
  console.log("user found", user);
  if (!user) {
    throw new error("user not found");
  }
  if (password == user.password) {
    console.log("user validated successfully");
    const token = jwt.sign({ userId: user.id }, "secret-key", {
      expiresIn: "1h",
    });
    return token;
  } else {
    throw new error("invalid password");
  }
};

const getUserById = async (id) => {
  let userId = await userModel.findById(id);
  console.log("user by id:", userId);
  return userId;
};

const deleteData = async (id) => {
  let res = await userModel.deleteOne({ _id: id });
  return res;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteData,
  login,
};
