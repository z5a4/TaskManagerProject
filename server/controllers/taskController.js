// controllers/transporterController.js

const TaskSchema=require('../models/TaskSchema');

// Controller to create a new transporter
exports.createTask = async (req, res) => {
  const taskData = req.body;

  const {title,description}=taskData;
 

  if(!title){
    return res.json({success:false,message:'title is Required',focus:'title'});
  }

  if(!description){
    return res.json({success:false,message:'description is Required',focus:'description'});
  }
  
  try {
    const newTask = new TaskSchema(taskData);
    await newTask.save();

    // Clear the form data after successful registration
 const { title, ...clearedFormData } = taskData;
 // Send success response with message and registration ID
 return res.json({ success: true, message: 'Task successfully created', Taskid: newTask._id })     
    
 
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to format date as dd-mm-yyyy
const formatDate = (date) => {
  if (!date) return 'No Date';
  const d = new Date(date);
  let day = d.getDate();
  let month = d.getMonth() + 1; // Months are zero-based
  const year = d.getFullYear();

  // Pad day and month with leading zeros if necessary
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return `${day}-${month}-${year}`;
};

exports.getTask = async (req, res) => {
  try {
    const tasks = await TaskSchema.find();

    // Map through tasks and format dates
    const formattedTasks = tasks.map(task => ({
      ...task._doc, // Spread existing task properties
      createdAt: formatDate(task.createdAt),
      updatedAt: formatDate(task.updatedAt)
    }));

    res.json(formattedTasks);
  } catch (error) {
    console.error('Error fetching Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getPendingTask = async (req, res) => {
  try {
    // Filter tasks based on status column having 'Pending'
    const tasks = await TaskSchema.find({ status: 'Pending' });

    // Map through tasks and format dates
    const formattedTasks = tasks.map(task => ({
      ...task._doc, // Spread existing task properties
      createdAt: formatDate(task.createdAt),
      updatedAt: formatDate(task.updatedAt)
    }));

    // Respond with the filtered and formatted tasks
    res.json(formattedTasks);
  } catch (error) {
    console.error('Error fetching Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getCompletedTask = async (req, res) => {
  try {
    // Filter tasks based on status column having 'Completed'
    const tasks = await TaskSchema.find({ status: 'Completed' });

    // Map through tasks and format dates
    const formattedTasks = tasks.map(task => ({
      ...task._doc, // Spread existing task properties
      createdAt: formatDate(task.createdAt),
      updatedAt: formatDate(task.updatedAt)
    }));

    // Respond with the filtered and formatted tasks
    res.json(formattedTasks);
  } catch (error) {
    console.error('Error fetching Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getToDOTask = async (req, res) => {
  try {
    // Filter tasks based on status column having 'Completed'
    const tasks = await TaskSchema.find({ status: 'ToDo' });

    // Map through tasks and format dates
    const formattedTasks = tasks.map(task => ({
      ...task._doc, // Spread existing task properties
      createdAt: formatDate(task.createdAt),
      updatedAt: formatDate(task.updatedAt)
    }));

    // Respond with the filtered and formatted tasks
    res.json(formattedTasks);
  } catch (error) {
    console.error('Error fetching Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await TaskSchema.findByIdAndUpdate(id, req.body, { new: true });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error('Error updating Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete registration
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await TaskSchema.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting Task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getTaskData = async (req, res) => {
  const { TaskId } = req.params;

  try {
    const TaskData = await TaskSchema.findOne({ TaskId });

    if (TaskData) {
      res.json({
        title: TaskData.title,
        description: TaskData.description,
         });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get the total count of pending tasks
exports.getTotalPendingTasksCount = async (req, res) => {
  try {
    const pendingTasksCount = await TaskSchema.countDocuments({ status: 'Pending' });
    res.json({ totalPendingTasks: pendingTasksCount });
  } catch (error) {
    console.error('Error counting pending tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get the total count of ToDo tasks
exports.getTotalToDoTasksCount = async (req, res) => {
  try {
    const toDoTasksCount = await TaskSchema.countDocuments({ status: 'ToDo' });
    res.json({ totalToDoTasks: toDoTasksCount });
  } catch (error) {
    console.error('Error counting ToDo tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get the total count of completed tasks
exports.getTotalCompletedTasksCount = async (req, res) => {
  try {
    const completedTasksCount = await TaskSchema.countDocuments({ status: 'Completed' });
    res.json({ totalCompletedTasks: completedTasksCount });
  } catch (error) {
    console.error('Error counting completed tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
