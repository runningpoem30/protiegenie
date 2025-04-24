const express = require('express');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

// GET endpoint using URL param
app.get('/api/proteins/:name', (req, res) => {
  const proteinName = req.params.name;

  const python = spawn('python3', ['query_protein.py', proteinName]);

  let result = '';
  let error = '';

  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  python.stderr.on('data', (data) => {
    error += data.toString();
  });

  python.on('close', (code) => {
    if (code !== 0 || error) {
      console.error('Python error:', error);
      return res.status(500).json({ error: 'Internal Python error', details: error });
    }

    try {
      const jsonData = JSON.parse(result);
      res.json(jsonData);
    } catch (err) {
      res.status(500).json({ error: 'Invalid JSON returned from Python', rawOutput: result });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/api/proteins/:name`);
});
