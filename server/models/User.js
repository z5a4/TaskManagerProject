// adminSchema.js
const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 

const userSchema = new mongoose.Schema({
  Userid: {
    type: String,
    unique: true, // Assuming you want 'id' to be unique
  },
  FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  SecurityQuestion: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
});


userSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'User' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'User', lastId: 'U000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newaid = 'U' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.aid = newaid;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newaid;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
