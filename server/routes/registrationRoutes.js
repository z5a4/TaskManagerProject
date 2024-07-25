// routes/registrationRoutes.js (unchanged)
const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// New registration
router.post('/api/register', registrationController.registerUser);

// Get registration
router.get('/api/registrations', registrationController.getRegistrations);

// Update registration
router.put('/api/registrations/:id', registrationController.updateRegistration);

// Delete registration
router.delete('/api/registrations/:id', registrationController.deleteRegistration);

module.exports = router;