import axios from "axios";

export async function getApiData() {
  const response = await axios.get("http://localhost:3000/users");
  console.log(response.data);
  return response.data;
}
