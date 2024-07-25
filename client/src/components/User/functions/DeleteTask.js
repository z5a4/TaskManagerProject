import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { task } = state || {};


  useEffect(() => {
    if (!task) {
      console.error('Task not found or missing information.');
      //navigate('/admin');
    }
  }, [task, navigate]);


  const handleDelete = async () => {
    try {
      if (!task) {
        console.error('Task not found or missing information.');
        //navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/Task/${task._id}`);
      alert('Task Deleted!');
      //navigate('/admin');
    } catch (error) {
      console.error('Error deleting Task:', error);
    }
  };

  return { task, handleDelete };
};

export default FDeleteTask;
