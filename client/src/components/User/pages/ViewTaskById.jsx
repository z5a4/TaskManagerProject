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
import FViewTaskById from '../functions/ViewTaskById';

const ViewTaskById = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task } = location.state;
  const { formData, handleChange, handleSubmit } = FViewTaskById(task, navigate);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl">
          <Typography variant='h3' className="text-center h-14 mt-3 font-bold text-blue-gray-900">View Task</Typography>
        <hr />
        <Typography className="my-4 text-center text-gray-600 font-semibold">
          View the task details from here.
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-6 px-6 py-4">
            <div>
              <Typography className="mb-1" color="black" variant="h6">Title</Typography>
              <Input 
                size="lg"
                disabled
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
                disabled
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
                disabled
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
              <Typography className="mb-1" color="black" variant="h6">Created Date</Typography>
              <Input 
                size="lg"
                disabled
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Created Date"
                type="text"
                id="createdAt"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleChange} 
              />
            </div>
            <div>
              <Typography className="mb-1" color="black" variant="h6">Updated Date</Typography>
              <Input 
                size="lg"
                disabled
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{ className: "before:content-none after:content-none" }}
                placeholder="Updated Date"
                type="text"
                id="updatedAt"
                name="updatedAt"
                value={formData.updatedAt}
                onChange={handleChange} 
              />
            </div>
            
           </CardBody>
          
        </form>
      </Card>
    </div>
  );
};

export default ViewTaskById;
