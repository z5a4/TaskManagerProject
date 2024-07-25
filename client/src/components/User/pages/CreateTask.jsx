import React from "react";
import {
  Input,
  Select,
  Option,
  Textarea,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import FCreateTask from '../functions/FCreateTask';

function CreateTask() {
  const [open, setOpen] = React.useState(false);
  const { formData, errors, handleInputChange, handleSubmit, taskId } = FCreateTask();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" className="rounded-none" onClick={handleOpen} variant="gradient">
          New Task 
        </Button>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="mb-2">New Task</DialogHeader>
        <hr></hr>
        <Typography
          className="mb-3 mt-2 font-bold text-center"
          variant="paragraph"
          color="gray"
        >
          Enter the task title and description to remember the task.
        </Typography>
        <form onSubmit={handleSubmit}>
          <DialogBody className="mr-2 ml-2">
            <Typography className="mb-1" color="black" variant="h6">
              Title 
            </Typography>
            <Input 
              size="lg" 
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Project Title"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange} 
            />
            {errors.title && <Typography className="text-red-500 text-sm mt-1">{errors.title}</Typography>}
            <Typography className="mb-1" color="black" variant="h6">
              Description 
            </Typography>
            <Textarea 
              size="lg" 
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Description"
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />  
            {errors.description && <Typography className="text-red-500 text-sm mt-1">{errors.description}</Typography>}
            <Typography className="mb-1" color="black" variant="h6">
              Status 
            </Typography>
            <Select 
              size="lg" 
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="status"
              name="status"
              value={formData.status}
              onChange={(e) => handleInputChange({ target: { name: 'status', value: e } })}
            >
              <Option value="Pending">Pending</Option>
              <Option value="Completed">Completed</Option>
              <Option value="ToDo">ToDo</Option>
            </Select>
            {errors.status && <Typography className="text-red-500 text-sm mt-1">{errors.status}</Typography>}  
            <div>
              <Typography className="mb-1" color="black" variant="h6">Created Date</Typography>
              <Input 
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Created Date"
                type="date"
                id="createdAt"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleInputChange} 
              />
              {errors.createdAt && <Typography className="text-red-500 text-sm mt-1">{errors.createdAt}</Typography>}
            </div>  
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={handleSubmit}>
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default CreateTask;
