const axios = require("axios");

async function fetchUserInfo(orderRef) {
  try {
    //Get information from Identity Provider
    const URL = "https://idp.ravenrebels.com/rp/v5.1/collect";
    const payload = {
      orderRef,
    };

    const axiosResponse = await axios.post(URL, payload);
    return axiosResponse.data;
  } catch (e) {
    console.log("Error in fetchUserInfo", e.response);
    return null;
  }
}

module.exports = {
  fetchUserInfo,
};
