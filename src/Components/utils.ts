import axios from "axios";


export const fetchAPIbyCategory = async (category: string) => {
  const baseURL = "http://localhost:5000/api/data";
  const response = await axios.get(baseURL);
  const jsonData = response.data;
  return jsonData[category];
};
