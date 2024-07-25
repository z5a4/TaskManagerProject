//const Volunteer = require('../models/volunteerSchema');

/*
exports.createVolunteer = async (req, res) => {
  const formData=req.body;
  const{id,volunteerName,dateOfBirth,volunteeraddress,volunteermobileNo,email,username,password,securityQuestion,answer}=formData;
 // Additional validation checks
 const currentDate = new Date().toISOString().split('T')[0];
 const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
 const usernameRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

 if (!id) {
  return res.json({ success: false, message: 'Member ID is Mandatory', focus: 'id' });
}

 if (!volunteerName) {
   return res.json({ success: false, message: 'Volunteer Name is required', focus: 'volunteerName' });
 }
 
 if(!dateOfBirth){
  return res.json({success:false,message:'date of birth is required', focus:'dateOfBirth'});
}
 if(!email){
  return res.json({success:false,message:'Email is required', focus:'email'});
}
 // Check if the email is in a valid format
 
if(!volunteeraddress){
  return res.json({ success: false, message: 'Address is required', focus: 'volunteeraddress' });
}
if(!volunteermobileNo) {
  return res.json({success:false,message:'Mobile number is required',focus:'volunteermobileNo'});
}
 
if(!username){
  return res.json({success:false,message:'Username is required',focus:'username'});
}
if (!username.match(usernameRegex)) {
  return res.json({ success: false, message: 'Username should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'username' });
}
// Check if the password matches the regex pattern
if (!password.match(passwordRegex)) {
  return res.json({ success: false, message: 'Password should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'password' });
}

 if(!securityQuestion){ 
   return res.json({ success: false, message: 'Security Question is required', focus: 'securityQuestion' }); 
 }

 if(!answer){
   return res.json({ success: false, message: 'Answer is required', focus: 'answer' });
 }
 
 
 

 // Check if the date of birth is after the current date
 if (new Date(dateOfBirth) > new Date(currentDate)) {
   return res.json({ success: false, message: 'Date of Birth cannot be after the current date', focus: 'dateOfBirth' });
 }


 

 
 try {
   // Check if the username, email, or mobile number already exists in the database
   const user = await Volunteer.findOne({ $or: [{ username: formData.username }, { email: formData.email }, { volunteermobileNo: formData.volunteermobileNo }] });

       if (user) {
           if (user.username === formData.username) {
               return res.json({ success: false, message: 'Username already occupied', focus: 'username' });
           } else if (user.email === formData.email) {
               return res.json({ success: false, message: 'Email already registered', focus: 'email' });
           }    else {
               return res.json({ success: false, message: 'Mobile number already registered', focus: 'volunteermobileNo' });
           }
          
          }
           else 
           {
    const newVolunteer = new Volunteer(formData);
    await newVolunteer.save();
  // Clear the form data after successful registration
 const { password, ...clearedFormData } = formData;
 // Send success response with message and registration ID
 return res.json({ success: true, message: 'Volunteer Registered done successfully', volunteerId: newVolunteer._id })     
    }
  } catch (error) {
    console.error('Error creating Volunteer:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};


exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (error) {
    console.error('Error fetching Volunteers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update registration
exports.updateVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteer = await Volunteer.findByIdAndUpdate(id, req.body, { new: true });

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    res.status(200).json(volunteer);
  } catch (error) {
    console.error('Error updating Volunteer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteer = await Volunteer.findByIdAndDelete(id);

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error('Error deleting Volunteer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getVolunteerData = async (req, res) => {
  const { VolunteerId } = req.params;

  try {
    const VolunteerData = await Volunteer.findOne({ VolunteerId });

    if (VolunteerData) {
      res.json({
        volunteerName: VolunteerData.volunteerName,
        volunteeraddress: VolunteerData.volunteeraddress,
        volunteermobileNo: VolunteerData.volunteermobileNo,
      });
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

*/