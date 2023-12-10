const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [
  { id: 1, title: 'Ram', description: 'boy' },
  { id: 2, title: 'sita', description: 'girl' },
   { id: 3, title: 'lakshaman', description: 'Boy'},
];

// Middleware for basic validation
function validateTask(req, res, next) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  next();
}

// Routes

app.get('/tasks', (req, res) => {
  const page = req.query.page || 1;
  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTasks = tasks.slice(startIndex, endIndex);

  res.json(paginatedTasks);
});


app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});


app.post('/tasks', validateTask, (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.put('/tasks/:id', validateTask, (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTaskIndex = tasks.findIndex(task => task.id === taskId);

  if (updatedTaskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description } = req.body;
  tasks[updatedTaskIndex] = { ...tasks[updatedTaskIndex], title, description };
  res.json(tasks[updatedTaskIndex]);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
