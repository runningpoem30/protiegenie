const {
  getBiologicalFunction,
  getStructure,
  getDrugs,
  getDiseases,
  getInteractions,
  getVariants
} = require('../services');

exports.getBioInfo = async (req, res) => {
  const { query } = req.query;
  try {
    const [functionData, structureData, drugData, diseaseData, interactionData, variantData] = await Promise.all([
      getBiologicalFunction(query),
      getStructure(query),
      getDrugs(query),
      getDiseases(query),
      getInteractions(query),
      getVariants(query)
    ]);
    res.json({ functionData, structureData, drugData, diseaseData, interactionData, variantData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};