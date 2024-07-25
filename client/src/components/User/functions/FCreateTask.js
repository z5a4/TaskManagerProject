import { useState } from 'react';
import Axios from 'axios';

const FCreateTask = () => {
  const [taskId,settaskId]=useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    createdAt:'',
    });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        const response = await Axios.post('http://localhost:5000/api/createTask', formData);
        if (response.data.success) {
        alert(response.data.message);
        settaskId(response.data.taskId);
          setFormData({
            title: '',
            description: '',
            status: '',
            createdAt:'', // Set initial value to current date
            });
            
       // window.location.href = '/admin';
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
        alert('Task creation failed. Please try again.');
      }
  }  
      
    
  

  return { formData, errors, handleInputChange, handleSubmit, taskId };
};

export default FCreateTask;
