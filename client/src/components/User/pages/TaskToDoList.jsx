import { Card, Typography, Button } from "@material-tailwind/react";
import DefaultSidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import FViewToDoTask from '../functions/TaskToDoList';
import CreateTask from './CreateTask';
import UpdateTaskList from './UpdateTaskList';
import axios from 'axios';
import React, { useEffect } from 'react';

const ToDoTaskList = () => {
    const { tasks, error } = FViewToDoTask();
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location || {};
    const { task } = state || {};

    useEffect(() => {
      if (!task) {
        console.error('Task not found or missing information.');
        // Optionally redirect or show a message
        // navigate('/admin');
      }
    }, [task, navigate]);

    const handleDelete = async (taskId) => {
      try {
        if (!taskId) {
          console.error('Task ID not found or missing information.');
          return;
        }

        await axios.delete(`http://localhost:5000/api/Task/${taskId}`);
        alert('Task Deleted!');
        // Optionally redirect or refresh
        // navigate('/admin');
      } catch (error) {
        console.error('Error deleting Task:', error);
      }
    };

    const handleUpdate = (task) => {
      navigate(`/update/task/${task._id}`, { state: { task } });
    };

    return (
        <div>
            <DefaultSidebar />
            <Navbar />
            <br />
            <br />
            <Typography variant="h4" className='text-start mt-5 ml-40' color="gray">
           User-In Progress Task
        </Typography>
            <CreateTask />

            <Card className="h-full w-full ml-36 bold">
                <table className="w-full min-w-max rounded-none table-auto text-left">
                    <thead>
                        <tr>
                            <th className="border p-4 text-center text-black font-bold">Title</th>
                            <th className="border p-4 text-center text-black font-bold">Description</th>
                            <th className="border p-4 text-center text-black font-bold">Status</th>
                            <th className="border p-4 text-center text-black font-bold">Due Date</th>
                            <th className="border p-4 text-center text-black font-bold">Updated Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tasks.map(task => (
                        <tr key={task._id} className="text-center">
                            <td className="border px-4 py-2">{task.title}</td>
                            <td className="border px-4 py-2">{task.description}</td>
                            <td className="border px-4 py-2">{task.status}</td>
                            <td className="border px-4 py-2">{task.createdAt}</td>
                            <td className="border px-4 py-2">{task.updatedAt}</td>
                         </tr>
                    ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default ToDoTaskList;
