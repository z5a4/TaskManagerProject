import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FCommonRegistrationForm from '../functions/FCommonRegistration';
import loginimg from "../../Images/login1.png";
import { Button, Input, Alert, Typography } from '@material-tailwind/react';
import Footer from '../../Footer/Footer';


const CommonRegistrationForm = () => {
  const { formData, handleChange, handleSubmit, errorMessage, showAlert, handleCloseAlert,regid } = FCommonRegistrationForm();
  


  return (
    <>
      <div className="container mx-auto mt-8 mr-4 ml-4">
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-md">
                <div className="md:w-1/2 p-4 border-r border-gray-300">
                    <img src={loginimg} 
                    alt="Login Image" 
                    className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4 mt-12">
                    <h1 className="text-3xl font-semibold mb-4">Sign-up</h1>
                    <br></br>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                            <label htmlFor="FullName" className="block mb-1">Full Name:</label>
                            <Input
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                             placeholder="your full-name"
                             type="text"
                             id="name"
                             name="name"
                             value={formData.name}
                             onChange={handleChange} />
                        </div>
                        <br></br>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-1">Mobile No:</label>
                            <Input
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                             placeholder="+91985*********"
                             type="text"
                             id="mobileNo"
                             name="mobileNo"
                             value={formData.mobileNo}
                             onChange={handleChange} />
                        </div>
                        <br></br>
                        <div className="mb-4">
                            <label htmlFor="emailId" className="block mb-1">Email:</label>
                            <Input
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                             placeholder="name@mail.com"
                             type="text"
                             id="email"
                             name="email"
                             value={formData.email}
                             onChange={handleChange} />
                        </div>
                        <br></br>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">Password:</label>
                            <Input 
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                            placeholder="********"
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}  />
                            <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        Use at least 8 characters, one special character, one lowercase and one number.
      </Typography>
                        </div>
                    <br></br>
                        <Button className='mr-2' type="submit" color="green" size="lg">Register</Button>
                       </form>
                    <Typography color="blue-gray" className="mt-4">have an account ? <a href='/login' className="font-medium text-gray-600">Sign-in</a></Typography>
                    <br></br>
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
};

export default CommonRegistrationForm;


        
        