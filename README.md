## RESTfulAPI
# Assignment: Build a Basic RESTful API
# Description:
 tasked with building a simple RESTful API using Node.js that manages a collection
of tasks (e.g., to-do items). The API should allow users to perform basic CRUD (Create,
Read, Update, Delete) operations on tasks. The data should be stored in memory (no
database required). Your API should support the following endpoints:

1. ## `GET /tasks`: Retrieve a list of all tasks.
   
3. `GET /tasks/:id`: Retrieve a specific task by ID.
4. `POST /tasks`: Create a new task.
5. `PUT /tasks/:id`: Update an existing task by ID.
6. `DELETE /tasks/:id`: Delete a task by ID.
   
*Requirements:*
1. Use Express.js to build the API.
2. Implement basic validation to ensure that task properties are required (e.g., title,
description).
3. Store the tasks in memory (an array or object).
4. Provide clear and concise API documentation, including sample requests and responses.
5. Use appropriate status codes (e.g., 200 for success, 404 for not found, 400 for bad
requests).
6. Test the API using tools like Postman or curl and include instructions for running the API
locally.
7. Add error handling to gracefully handle unexpected issues.
*Bonus Points (Optional):*
- Implement pagination for the `GET /tasks` endpoint.
- Add sorting and filtering options for task retrieval.
- Include authentication and authorization mechanisms for protecting certain endpoints
