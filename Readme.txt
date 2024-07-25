# Task Manager Project

This project contains the server and client folders for the Task Manager application.

The Task Manager application allows users to manage tasks and users through a client-server architecture.

    1. When the server is started, it listens for incoming requests on a specified port.
    2. The server provides APIs for managing tasks and users, allowing clients to perform CRUD operations.
    3. Clients can send HTTP requests to the server's APIs to interact with the application.
    4. For example, to create a new task, a client can send a POST request to `/api/tasks` with the task details in the request body.
    5. The server receives the request, validates the input, and creates a new task in the database.
    6. Similarly, clients can send requests to update or delete tasks, as well as perform similar operations on users.
    7. The server handles these requests, performs the necessary operations on the database, and sends back appropriate responses.
    8. The client-side code provides a user interface that allows users to interact with the application.
    9. Users can view, create, update, and delete tasks and users through the client interface.
    10. The client communicates with the server by sending HTTP requests and receiving responses.
    11. The server-side code handles these requests and responds with the requested data or appropriate status codes.
    12. The Task Manager application follows the RESTful API design principles, making it easy to understand and use.

    By following these steps, users can effectively manage tasks and users using the Task Manager application.


## Server

The server folder contains the backend code for the Task Manager application. It provides the following APIs:

- `/api/tasks`: This API is used to manage tasks. It supports the following operations:
    - `GET /api/tasks`: Get all tasks.
    - `GET /api/tasks/:id`: Get a specific task by ID.
    - `GET /api/getPendingTask`: Get task list by pending status.
    - `GET /api/getCompletedTask`: Get task list by In Progress status.
    - `GET /api/getToDoTask`: Get task list by ToDo status. 
    - `POST /api/tasks`: Create a new task.
    - `PUT /api/tasks/:id`: Update a task by ID.
    - `DELETE /api/tasks/:id`: Delete a task by ID.
    - `POST /api/tasks/register`: Register a new user.
    - `POST /api/tasks/login`: Login with user credentials.
    - `POST /api/tasks/logout`: Logout the current user.
    - `DELETE /api/tasks/:id`: Delete a task by ID.

    - `GET /api/users/status/:status`: Get users by status.
    - `PUT /api/users/:id/status`: Update the status of a user by ID.
    - `PUT /api/users/:id/role`: Update the role of a user by ID.
    - `DELETE /api/users/:id`: Delete a user by ID.

- `/api/users`: This API is used to manage users. It supports the following operations:
    - `GET /api/users`: Get all users.
    - `GET /api/users/:id`: Get a specific user by ID.
     - `GET /api/getPendingTask`: Get task list by pending status.
    - `GET /api/getCompletedTask`: Get task list by In Progress status.
    - `GET /api/getToDoTask`: Get task list by ToDo status. 
    - `POST /api/tasks`: Create a new task.
    - `PUT /api/tasks/:id`: Update a task by ID.
    - `DELETE /api/tasks/:id`: Delete a task by ID.
    - `POST /api/tasks/register`: Register a new user.
    - `POST /api/tasks/login`: Login with user credentials.
    - `POST /api/tasks/logout`: Logout the current user.
    - `DELETE /api/tasks/:id`: Delete a task by ID.


## Working of the System

## Client

The client folder contains the frontend code for the Task Manager application. It provides a user interface for managing tasks and users.

## Getting Started

To run the Task Manager application, follow these steps:

1. Clone the repository.
2. Navigate to the server folder and run `npm install` to install the server dependencies.
3. Run `npm start` to start the server.
4. Navigate to the client folder and run `npm install` to install the client dependencies.
5. Run `npm start` to start the client.

Make sure you have Node.js and npm installed on your machine.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).



