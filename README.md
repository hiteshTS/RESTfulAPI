## RESTfulAPI
# Assignment: Build a Basic RESTful API
# Description:
Tasked with building a simple RESTful API using Node.js that manages a collection
of tasks (e.g., to-do items). The API should allow users to perform basic CRUD (Create,
Read, Update, Delete) operations on tasks. The data should be stored in memory (no
database required). Your API should support the following endpoints:

## 1. `GET /tasks`: Retrieve a list of all tasks.
![Screenshot (687)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/db34c35d-5f8e-4679-93ae-791d83010be7)

## 2. `GET /tasks/:id`: Retrieve a specific task by ID.
![Screenshot (688)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/81b95a98-8021-4303-9f80-3ef163804ca5)

## 3. `POST /tasks`: Create a new task.
![Screenshot (689)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/67cf8753-eae5-4e57-a5b8-77bcfb75a46f)

## 4. `PUT /tasks/:id`: Update an existing task by ID.
![Screenshot (691)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/4de023eb-855b-4398-b289-0983ed1d7d93)

## 5. `DELETE /tasks/:id`: Delete a task by ID.
![Screenshot (692)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/8911726f-c7cd-47ac-8d85-e130b3aa2057)

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
