const mongoose = require('mongoose');

const registrationSchema = require('./registrationSchema'); // Import the existing schema

// Create a model for the "registrations" collection
const Registration = mongoose.model('Registration', registrationSchema);

// Add methods for login/authentication if needed

module.exports = Registration;
