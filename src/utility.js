import axios from "axios";

export async function getApiData() {
  const response = await axios.get("http://localhost:3000/users");
  console.log(response.data);
  return response.data;
}

export async function addUserToBackend(user) {
  try {
    const res = await axios.post("http://localhost:3000/users", user);
    return res.data;
  } catch (error) {
    console.log("error adding user:", error);
    throw error;
  }
}

export async function deleteUserFromBackend(id) {
  try {
    const resp = await axios.delete(`http://localhost:3000/users?id=${id}`);
    return resp.data;
  } catch (error) {
    console.log("error deleting user:", error);
    throw error;
  }
}
