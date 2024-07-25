import { useState } from 'react';
import axios from 'axios';

const FViewTaskById = (task, navigate) => {
  const [formData, setFormData] = useState({
    taskId: task.TaskId || '',
    title: task.title || '',
    description: task.description || '',
    status: task.status || '',
    createdAt: task.createdAt || '',
    updatedAt: task.updatedAt || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/Task/${task._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FViewTaskById;
