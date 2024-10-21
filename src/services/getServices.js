import axios from "axios";

export const getServices = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/services/api/get-all`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const generateServiceDetails = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/services/api/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
