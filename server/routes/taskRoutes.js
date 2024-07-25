// routes/VolunteerRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.post('/api/createTask', TaskController.createTask);

router.get('/api/getTask',TaskController.getTask);

router.get('/api/getPendingTask',TaskController.getPendingTask);

router.get('/api/getCompletedTask',TaskController.getCompletedTask);

router.get('/api/getToDoTask',TaskController.getToDOTask);

router.put('/api/Task/:id', TaskController.updateTask);

router.delete('/api/Task/:id',TaskController.deleteTask);

router.get('/api/Task/:TaskId',TaskController.getTaskData);

// Route to get the total count of pending tasks
router.get('/tasks/pending/count', TaskController.getTotalPendingTasksCount);

// Route to get the total count of ToDo tasks
router.get('/tasks/todo/count', TaskController.getTotalToDoTasksCount);

// Route to get the total count of completed tasks
router.get('/tasks/completed/count', TaskController.getTotalCompletedTasksCount);


module.exports = router;
