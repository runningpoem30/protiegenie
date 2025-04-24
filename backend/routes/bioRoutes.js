const express = require('express');
const router = express.Router();
const { getBioInfo } = require('../controllers/bioController');

router.get('/', getBioInfo);
module.exports = router;