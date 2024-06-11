const Axios = require("axios").default;

const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

module.exports = {
  axios
};
