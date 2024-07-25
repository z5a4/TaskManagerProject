import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Input, Button,Typography} from '@material-tailwind/react';
import {Alert} from '@material-tailwind/react'
import loginimg from "../User/Images/login.png"
//import { CommonNavbar } from '../commonNavbar';
import Footer from '../../components/User/Footer/Footer';

const LoginForm = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
       
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData, { withCredentials: true });

            if (response.status === 200 && response.data.success) {
                alert(response.data.message);
                setFormData({
                    email: '',
                    password: '',
                   
                });
            
                window.location.href = '/dashboard';
            } else {
                if (response.data.focus) {
                    const field = document.getElementById(response.data.focus);
                    if (field) {
                        field.focus();
                    }
                }
                
                window.alert(response.data.message);
            }  
            
        } catch (error) {
            alert('Invalid Credentials. Please try again.');
        }
    };

    return (
        <>
        {/*<CommonNavbar/> */}
        <div className="container mx-auto mt-8 mr-4 ml-4">
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-md">
                <div className="md:w-1/2 p-4 border-r border-gray-300">
                    <img src={loginimg} 
                    alt="Login Image" 
                    className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4 mt-12">
                    <h1 className="text-3xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
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
                    <br></br>
                    <br></br>  
                        <Button className='mr-2' type="submit" color="green" size="lg">Login</Button>
                        <a href='/forgotpassword'> <Button type="button" color="blue" size="lg">Forgot Password</Button></a>
                    </form>
                    <Typography color="blue-gray" className="mt-4">Don't have an account ? <a href='/register' className="font-medium text-gray-600">Sign-Up</a></Typography>
                    <br></br>
                </div>
            </div>
        </div>
        <Button color="red" size="lg" className="mt-3 ms-2" onClick={() => window.history.back()}>Back</Button>
        <Footer/>
        </>
    );
};

export default LoginForm;
