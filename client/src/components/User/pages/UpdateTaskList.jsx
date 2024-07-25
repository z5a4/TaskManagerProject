import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Input,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
  Textarea,
  Typography,
  Button
} from "@material-tailwind/react";
import FUpdateTask from '../functions/UpdateTask';

const UpdateTaskList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateTask(task, navigate);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl">
          <Typography variant='h3' className="text-center h-14 mt-3 font-bold text-blue-gray-900">Edit Task</Typography>
        <hr />
        <Typography className="my-4 text-center text-gray-600 font-semibold">
          Update the task details from here.
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-6 px-6 py-4">
            <div>
              <Typography className="mb-1" color="black" variant="h6">Title</Typography>
              <Input 
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Project Title"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange} 
              />
            </div>
            <div>
              <Typography className="mb-1" color="black" variant="h6">Description</Typography>
              <Textarea 
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Description"
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography className="mb-1" color="black" variant="h6">Status</Typography>
              <Select 
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                id="status"
                name="status"
                value={formData.status}
                onChange={(e) => handleChange({ target: { name: 'status', value: e } })}
              >
                <Option value="Pending">Pending</Option>
                <Option value="Completed">Completed</Option>
                <Option value="ToDo">ToDo</Option>
              </Select>
            </div>
            <div>
              <Typography className="mb-1" color="black" variant="h6">Updated Date</Typography>
              <Input 
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Updated Date"
                type="date"
                id="updatedAt"
                name="updatedAt"
                value={formData.updatedAt}
                onChange={handleChange} 
              />
            </div>
            
           </CardBody>
          <CardFooter className="flex justify-end space-x-2 px-6 py-4">
            <Button
              variant="text"
              color="red"
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" type="submit">
              <span>Submit</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UpdateTaskList;
