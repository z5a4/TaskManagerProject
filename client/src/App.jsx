import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//import Login
import Login from './components/User/Login'

//import Register
import Register from './components/User/CommonRegistration/pages/CommonRegistration'

//import Dashboard
import Dashboard from './components/User/User'

//import create Task
import CreateTask from './components/User/pages/CreateTask'

//import get Task
import GetTask from './components/User/pages/TaskList'

import GetPendingTask from './components/User/pages/TaskPendingList'

import GetCompletedTask from './components/User/pages/TaskCompletedList'

import GetToDoTask from './components/User/pages/TaskToDoList'

import ViewTask from './components/User/pages/ViewTaskById'

//import update Task
import UpdateTask from './components/User/pages/UpdateTaskList'

//import Task By Id
import TaskById from './components/User/pages/GetTaskById'

//import delete Task
import DeleteTask from './components/User/pages/DeleteTask'


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/getTask" element={<GetTask />} />
          <Route path="/getPendingTask" element={<GetPendingTask />} />
          <Route path="/getCompletedTask" element={<GetCompletedTask />} />
          <Route path="/getToDoTask" element={<GetToDoTask />} />
          <Route path="/update/task/:id" element={<UpdateTask />} />
          <Route path="/view/task/:id" element={<ViewTask />} />
          <Route path="/TaskById" element={<TaskById />} />
          <Route path="/deleteTask" element={<DeleteTask />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

