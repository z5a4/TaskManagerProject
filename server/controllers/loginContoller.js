const Registration = require('../models/registrationSchema');
//const RegularFWRequestModel=require('../models/RegularFWRequestModel');
//const MemberModel=require('../models/memberSchema');
//const FarmerModel=require('../models/slurryrequestModel');  // Import the existing schema
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.loginUser = async (req, res) => {
  const formData=req.body;
  const { email, password } = formData;

  if (!email){
    return res.json({success:false,message:'Email is Required',focus:'email'})
  }
  if (!password){
    return res.json({success:false,message:'Password is Required',focus:'password'})
  }
  
  try {
 const user = await Registration.findOne({ email, password });

    if (user) {
      req.session.userId = user._id;
      const { password, ...clearedFormData } = formData;
      res.json({
        success: true,
        message: 'Login successful',

      });

    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials or category',
      });
     
 
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

/*
exports.getUserDetails = async (req, res) => {
  try {
      // Check if user is authenticated
      if (!req.session.userId) {
          throw new Error('Unauthorized');
      }

      // Retrieve the user from the database
      const user = await Registration.findById(req.session.userId);
      if (!user) {
          throw new Error('User not found');
      }

      // Destructure user details
      const { email, mobileNo, name, } = user;

      // Initialize response data object
      let responseData = { email, mobileNo, name };

            // Return the response data
      res.status(200).json(responseData);
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
};  */

exports.logout = (req, res) => {
  try {
      req.session.destroy((err) => {
          if (err) {
              console.error('Error destroying session:', err);
              res.status(500).json({ error: 'Failed to logout' });
          } else {
              res.clearCookie('connect.sid'); // Clear the session cookie
              res.status(200).json({ message: 'Logout successful' });
          }
      });
  } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ error: 'Failed to logout' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
      const userId = req.session.userId; // Assuming you have authentication middleware to get user ID from the request
      const updatedData = req.body; // The updated data from the request body

      // Find the user by ID and update their profile
      const user = await Registration.findByIdAndUpdate(userId, updatedData, { new: true });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Return the updated user profile as a JSON response
      res.json(user);
  } catch (error) {
      console.error('Failed to update profile:', error);
      res.status(500).json({ error: 'Failed to update profile' });
  }
};

// controllers/authController.js


