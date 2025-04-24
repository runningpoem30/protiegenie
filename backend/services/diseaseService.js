const axios = require('axios');
exports.getDiseases = async (query) => {
  const response = await axios.get(`https://www.disgenet.org/api/gda/gene/${query}`);
  return response.data;
};