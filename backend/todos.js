// backend/todos.js
let todos = [];
let id = 0;

function getTodos() {
  return todos;
}

function addTodo(text) {
  const newTodo = { id: id++, text };
  todos.push(newTodo);
  return newTodo;
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id != id);
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo
};
