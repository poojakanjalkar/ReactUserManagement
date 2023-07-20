const {
  addUser,
  getAllUsers,
  getUserById,
} = require("../service/user.service");

const createUser = async (req, res) => {
  console.log(req);
  let data = req.body;
  await addUser(data);
  res.status(200).json({ message: "user created successfully" });
};

const getUser = async (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let email = req.query.email;
  let all = await getAllUsers();
  res
    .status(200)
    .json({ message: "user list fetched successfully", payload: all });
};

const getId = async (req, res) => {
  let id = req.query.id;
  console.log(id);
  let result = await getUserById(id);
  res
    .status(200)
    .json({ message: "user list fetched successfully", payload: result });
};

module.exports = {
  createUser,
  getUser,
  getId,
};