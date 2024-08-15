import axios from "axios";


export const fetchAPIbyCategory = async (category: string) => {
  const baseURL = "http://localhost:5000/api/data";
  const response = await axios.get(baseURL);
  const jsonData = response.data;
  return jsonData[category];
};

export const fetchLocalbyCategory = async (category: string) => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  const jsonData = await response.json();
  return jsonData[category] || [];
  }catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array or handle the error appropriately
  }
};