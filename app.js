const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [];
let taskIdCounter = 1;

// API endpoints
app.get('/tasks', (req, res) => {
    // Bonus: Implement pagination
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTasks = tasks.slice(startIndex, endIndex);

    res.status(200).json(paginatedTasks);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    // Basic validation: Ensure title and description are present
    if (!title || !description) {
        res.status(400).json({ error: 'Title and description are required' });
    } else {
        const newTask = {
            id: taskIdCounter++,
            title,
            description,
        };
        tasks.push(newTask);
        res.status(201).json(newTask);
    }
});

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        const { title, description } = req.body;
        tasks[taskIndex] = { id: taskId, title, description };
        res.status(200).json(tasks[taskIndex]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.status(204).send();
});
app.get('/tasks', (req, res) => {
    let filteredTasks = [...tasks];

    // Sorting
    const sortBy = req.query.sortBy;
    if (sortBy) {
        filteredTasks.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    // Filtering
    const filter = req.query.filter;
    if (filter) {
        filteredTasks = filteredTasks.filter(task =>
            task.title.toLowerCase().includes(filter.toLowerCase()) ||
            task.description.toLowerCase().includes(filter.toLowerCase())
        );
    }

    res.status(200).json(filteredTasks);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
