import React, { useState } from 'react';
import Axios from 'axios';

const FCommonRegistrationForm = () => {
    const [regid, setRegid] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
        password: '',
        securityQuestion: '',
        answer: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
  
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
            const response = await Axios.post('http://localhost:5000/api/register', formData);
            if (response.data.success) {
                window.alert(response.data.message);
                setRegid(response.data.regid);

                
                setFormData({
                    name: '',
                    email: '',
                    mobileNo: '',
                    password: '',
                    securityQuestion: '',
                    answer: '',
                });
            
                window.location.href = '/';
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
            console.error('Error submitting form:', error);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return { formData, errorMessage, handleChange, handleSubmit,regid };

       
};

export default FCommonRegistrationForm;
