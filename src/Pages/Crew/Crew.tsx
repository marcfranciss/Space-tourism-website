import axios from "axios";
import { useEffect, useState } from "react";

const Crew = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [imageData, setImageData] = useState<string>(
    "./assets/destination/image-mars.png"
  );
  const baseURL = "http://localhost:5000/api/data";

  const fetchAsyncAPI = async (
    URL: string,
    category: string,
    indexNum: number
  ) => {
    const response = await axios.get(URL);
    const jsonData = response.data;
    const jsonEndpoint = jsonData[category][indexNum].images.png;
    setMessage(jsonEndpoint);
    console.log(jsonData[category][indexNum].images.png);
    console.log(jsonEndpoint);
  };
  const fetchAPI = async (URL: string, category: string, indexNum: number) => {
    const response = await axios.get(URL);
    const jsonData = response.data;
    const jsonEndpoint = jsonData[category][indexNum].images.png;

    return jsonEndpoint;
  };

  useEffect(() => {
    fetchAsyncAPI(baseURL, "destinations", 0);
  }, []);

  const handleImage = async () => {
    const moonData = await fetchAPI(baseURL, "destinations", 2);
    setImageData(moonData);
  };
  return (
    <main>
      <h1>Hello from React!</h1>
      <img src={`./src/${imageData}`} alt='' />
      <p>{message}</p>
      <button onClick={handleImage}>Change image</button>
    </main>
  );
};

export default Crew;
