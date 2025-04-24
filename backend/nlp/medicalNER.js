exports.extractMedicalEntities = (text) => {
  // Simulate entity extraction (replace with scispaCy, MedSpaCy, etc.)
  return {
    drugs: text.match(/\b[A-Z][a-z]+\b/g) || [],
    diagnoses: text.includes('diabetes') ? ['Type 2 Diabetes'] : [],
    tests: text.match(/HbA1c|MRI/) || []
  };
};
