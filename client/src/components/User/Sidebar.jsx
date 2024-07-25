import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PowerIcon,
} from "@heroicons/react/24/solid";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from "react";

function DefaultSidebar() {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      // Disable back navigation
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
  
      const response = await axios.post('http://localhost:5000/api/logout');
      if (response.status === 200) {
        localStorage.removeItem('token');

        // Redirect to login page after successful logout
        navigate('/');
        // Disable window.history.back() after logout
        window.history.pushState(null, null, window.location.pathname);
      } else {
        console.error('Logout failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Re-enable back navigation
      window.removeEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
    }
  };

  return (
    <Card className="fixed top-0 left-0 h-full w-64 p-4 shadow-xl bg-black rounded-none flex flex-col md:w-48 sm:w-36 lg:w-64">
  <div className="mb-2 p-4">
        <Typography variant="h4" className="italic text-white">
          Do Task ✓
        </Typography>
        <hr
          style={{
            border: '0',
            borderTop: '2px dashed white',
            margin: '20px 0',
          }}
        />
      </div>
      <List className="flex-grow">
        <a href="/dashboard">
          <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black">
            Dashboard
          </ListItem>
        </a>
        <a href="/getTask">
          <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black">
            Tasks
          </ListItem>
        </a>
        <a href="/getCompletedTask">
          <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black">
            Completed
          </ListItem>
        </a>
        <a href="/getPendingTask">
          <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black">
            Pending
          </ListItem>
        </a>
        <a href="/getToDoTask">
          <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black">
            To Do
          </ListItem>
        </a>
      </List>
      <ListItem className="group font-bold text-white hover:bg-white hover:text-black focus:bg-white focus:text-black" onClick={handleLogout}>
        <ListItemPrefix>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Log Out
      </ListItem>
    </Card>
  );
}

export default DefaultSidebar;
