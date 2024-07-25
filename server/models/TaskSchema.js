// adminSchema.js
const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 

const TaskSchema = new mongoose.Schema({
  TaskId: {
    type: String,
    unique: true, // Assuming you want 'id' to be unique
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
   
  },
  updatedAt: {
    type: Date,
    
  },
  status: {
    type: String,
    required: true,
  },
});

TaskSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Taskmanager' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Taskmanager', lastId: 'T000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newregId = 'T' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.TaskId = newregId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newregId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});


const Taskmanager = mongoose.model('Taskmanager', TaskSchema);

module.exports = Taskmanager;