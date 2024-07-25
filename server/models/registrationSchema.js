// registrationSchema.js
const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 

const registrationSchema = new mongoose.Schema({
  
  regid: {
    type: String,
    
    unique: true, // Assuming you want 'id' to be unique
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  securityQuestion: {
    type: String,
   },
  answer: {
    type: String,
   },
});


registrationSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Registration' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Registration', lastId: 'RG000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newregId = 'RG' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.regid = newregId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newregId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;