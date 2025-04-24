const axios = require('axios');
exports.getInteractions = async (query) => {
  const response = await axios.get(`https://string-db.org/api/json/interaction_partners?identifiers=${query}`);
  return response.data;
};