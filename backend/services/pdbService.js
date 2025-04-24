const axios = require('axios');
exports.getStructure = async (query) => {
  const response = await axios.get(`https://alphafold.ebi.ac.uk/api/prediction/${query}`);
  return response.data;
};