// apiList.js
// 📘 Central API Index - Lists all available API endpoints with description

module.exports = [
  // 🔬 BIOINFORMATICS APIs
  {
    method: 'GET',
    path: '/api/bio',
    description: 'Fetches biological function, structure, drug associations, diseases, interactions, and variants based on a query keyword.'
  },

  // 🧠 NLP + OCR APIs
  {
    method: 'POST',
    path: '/api/ocr/upload',
    description: 'Uploads an image or PDF of a medical document and extracts text using OCR.'
  },
  {
    method: 'POST',
    path: '/api/nlp/entities',
    description: 'Extracts medical named entities (drugs, diagnoses, tests) from raw text.'
  },

  // 🧪 TEST & CONDITION APIs
  {
    method: 'POST',
    path: '/api/conditions/map',
    description: 'Maps extracted medical entities (drugs + tests) to known medical conditions.'
  },

  // 💊 DRUG APIs
  {
    method: 'GET',
    path: '/api/drugs/search?name=Paracetamol',
    description: 'Search for drug information using ChEMBL API.'
  },
  {
    method: 'GET',
    path: '/api/drugs/interactions?drug=Aspirin',
    description: 'Fetch potential drug interactions for a specific drug.'
  },

  // 🧬 GENE & PROTEIN APIs
  {
    method: 'GET',
    path: '/api/protein/function?gene=BRCA1',
    description: 'Get biological function of a gene using UniProt.'
  },
  {
    method: 'GET',
    path: '/api/protein/structure?protein=P53',
    description: 'Get protein 3D structure using AlphaFold API.'
  },

  // 🧠 DISEASE APIs
  {
    method: 'GET',
    path: '/api/disease/lookup?name=Diabetes',
    description: 'Search for diseases and related info from DisGeNET.'
  },

  // ⚙️ UTILITY APIs
  {
    method: 'GET',
    path: '/api/status',
    description: 'Health check for the server.'
  },
  {
    method: 'GET',
    path: '/api/version',
    description: 'Get current version of the API.'
  },
  {
    method: 'GET',
    path: '/api/docs',
    description: 'Redirects to API documentation site.'
  },

  // 📥 FILE UPLOAD APIs
  {
    method: 'POST',
    path: '/api/upload/pdf',
    description: 'Upload a PDF file for processing.'
  },
  {
    method: 'POST',
    path: '/api/upload/image',
    description: 'Upload an image file (JPG/PNG) for OCR.'
  },

  // 🧪 DATA MOCK APIs (for testing only)
  {
    method: 'GET',
    path: '/api/mock/drugs',
    description: 'Returns mock drug list for testing.'
  },
  {
    method: 'GET',
    path: '/api/mock/ocr',
    description: 'Returns mock OCR response for UI testing.'
  },

  // 🧩 INTEGRATION APIs
  {
    method: 'POST',
    path: '/api/integrations/healthvault',
    description: 'Integrate patient data into Microsoft HealthVault.'
  },
  {
    method: 'POST',
    path: '/api/integrations/blockchain/record',
    description: 'Store medical records in a blockchain ledger.'
  }
];