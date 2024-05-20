// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todos = require('./todos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.json(todos.getTodos());
});

app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = todos.addTodo(text);
  res.json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos.deleteTodo(id);
  res.sendStatus(204);
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
