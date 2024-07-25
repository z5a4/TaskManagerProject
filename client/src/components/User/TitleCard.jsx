import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  function TitleCard({ title, description, icon: Icon }) {
    return (
      <Card className="mt-6 w-full">
        <CardBody className="flex items-center">
          {Icon && <Icon className="h-10 w-10 text-blue-gray-500 mr-4" />}
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  
  export default TitleCard;
  