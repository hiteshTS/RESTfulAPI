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

## *Requirements:*
### 1. Use Express.js to build the API.
   Yes, I have used Express.js to build the API. The main script (app.js) includes the Express setup, route definitions, and server 
   initialization.
   ![Screenshot (693)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/c27e6c6b-4a1f-4019-a312-28ba5ec66543)

### 2. Implement basic validation to ensure that task properties are required (e.g., title,description).
Certainly, I have implemented basic validation to ensure that both title and description are required in the request body. If any of these properties are missing in a POST or PUT request, the API responds with a 400 - Bad Request status along with an appropriate error message.
### 3. Store the tasks in memory (an array or object).
Yes, tasks are stored in memory using a simple array named tasks. This array serves as a basic data storage mechanism for the tasks.
### 4. Provide clear and concise API documentation, including sample requests and responses.
The API documentation is provided either through comments in the code or in a separate document. Each endpoint is explained, along with the expected request format and response format. Sample requests and responses are included for clarity.
### 5. Use appropriate status codes (e.g., 200 for success, 404 for not found, 400 for badrequests).
API uses appropriate status codes to indicate the outcome of each request. For instance, a 200 status code is used for success, 404 for not found, and 400 for bad requests.
![Screenshot (694)](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/324825c6-0bc2-4f67-9cea-c0aa2ddc97b9)

### 6. Test the API using tools like Postman or curl and include instructions for running the API locally.
The provided curl commands and instructions allow easy testing of each endpoint. Postman provides a visual interface to interact with the API and inspect responses.
### 7. Add error handling to gracefully handle unexpected issues.
The API includes robust error handling mechanisms. Try-catch blocks or Express.js middleware are used to catch errors. Appropriate error messages and status codes are sent to clients to ensure they receive meaningful information about unexpected issues.
## *Bonus Points (Optional):*
- Implement pagination for the `GET /tasks` endpoint.
  Pagination has been implemented for the GET /tasks endpoint. Clients can use the page and pageSize parameters to navigate through the task list.
- Add sorting and filtering options for task retrieval.
![image](https://github.com/hiteshTS/RESTfulAPI/assets/137639073/16794380-01e5-477d-9eba-6c5c2cf06965)

