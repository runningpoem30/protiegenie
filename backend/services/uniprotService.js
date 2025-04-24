const axios = require('axios');
exports.getBiologicalFunction = async (query) => {
  const response = await axios.get(`https://rest.uniprot.org/uniprotkb/search?query=${query}&format=json`);
  return response.data;
};