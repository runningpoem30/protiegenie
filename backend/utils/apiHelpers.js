const axios = require('axios');
exports.fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch from ${url}: ${error.message}`);
  }
};