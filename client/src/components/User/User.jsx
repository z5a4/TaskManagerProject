import React from 'react';
import DefaultSidebar from './Sidebar';
import TitleCard1 from './TitleCard1';
import Navbar from './Navbar';
import CreateTask from './pages/CreateTask';
import DashboardCard from './DashboardCard';

const User = () => {
    return (
        <div className="flex flex-col">
            <DefaultSidebar />
            <div className="ml-64 md:ml-48 sm:ml-36">
                <Navbar />
                <br></br>
                <br></br>
                <TitleCard1 />
                <br></br>
                <CreateTask />
                <DashboardCard />
            </div>
        </div>
    );
};

export default User