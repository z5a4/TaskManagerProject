import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewPendingTask = () => {
  const [tasks, settasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchtasks();
  }, []);

  const fetchtasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getPendingTask');
      settasks(response.data);
    } catch (error) {
      setError('Error fetching Pending Task');
    }
  };

  return { tasks, error };
};

export default FViewPendingTask;
