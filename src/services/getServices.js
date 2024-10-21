export const getServices = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
