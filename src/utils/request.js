import axios from "axios";

export const request = async (options) => {
  try {
    const apiCall = await axios(options);
    return apiCall;
  } catch (error) {
    return error.response;
  }
};
