const {
  addUser,
  getAllUsers,
  getUserById,
  deleteData,
  login,
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

const deleteUserById = async (req, res) => {
  let getIdToDelete = req.query.id;
  console.log("---------id for delete-----", getIdToDelete, req.query);

  let remove = await deleteData(getIdToDelete);
  res
    .status(200)
    .json({ message: "user deleted successfully", payload: remove });
};

async function login1(req, res) {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    console.log("token is:", token);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  getUser,
  getId,
  deleteUserById,
  login1,
};
