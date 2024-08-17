import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "0ca6aa9adamshc1787ccaaa012dap167384jsne2f8436a182b",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
