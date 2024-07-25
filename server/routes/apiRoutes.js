const express = require('express');
const router = express.Router();
const LoginController=require('../controllers/loginContoller');
// Login route
router.post('/api/login', LoginController.loginUser);

//router.get('/api/getLoggedInUserDetails',getLoggedInUserDetails);

//router.get('/api/user', LoginController.getUserDetails);

router.put('/api/users', LoginController.updateUserProfile);


router.post('/api/logout', LoginController.logout);



module.exports = router;
