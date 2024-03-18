import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const httpClient = async (path) => {
  const result = await axios.get(url + path, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(result.data);
  return result.data;
};
