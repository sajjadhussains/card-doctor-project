import axios from "axios";

export const getServices = async () => {
  try {
    const res = await axios.get(
      `https://card-doctor-project-5116ux9tz-sajjad-hussains-projects-dc535a31.vercel.app/services/api/get-all`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const generateServiceDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://card-doctor-project-5116ux9tz-sajjad-hussains-projects-dc535a31.vercel.app/services/api/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
