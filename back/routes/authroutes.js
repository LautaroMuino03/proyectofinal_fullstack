const express = require('express');
const { login } = require('../controllers/authcontrollers.js');

const router = express.Router();

// Ruta de login
router.post('/login', login);

module.exports = router;
