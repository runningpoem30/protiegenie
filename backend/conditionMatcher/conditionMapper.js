exports.mapToCondition = ({ drugs, tests }) => {
  if (drugs.includes('Metformin') && tests.includes('HbA1c')) {
    return 'Diabetes Mellitus';
  }
  return 'Condition mapping not available';
};
