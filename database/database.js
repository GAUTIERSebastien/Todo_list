const fs = require('fs');
const path = require('path');

function getData() {
  const data = fs.readFileSync(path.resolve('database', 'data.json'), 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(path.resolve('database', 'data.json'), JSON.stringify(data, null, 2));
}

function addUser(name) {
  const data = getData();
  const newId = data.users.length + 1;
  data.users.push({ id: newId, name: name, todos: [] });
  writeData(data);
  return newId;
}

function addTodo(userId, title, category) {
  const data = getData();
  const user = data.users.find(user => user.id === userId);
  if (!user) {
    throw new Error('User not found');
  }
  const newId = user.todos.length + 1;
  user.todos.push({ id: newId, title: title, status: 'todo', category: category });
  writeData(data);
}

function getUsers() {
  return getData().users;
}

function getUser(userId) {
  const data = getData();
  return data.users.find(user => user.id === userId);
}

module.exports = {
  addUser,
  addTodo,
  getUsers,
  getUser
};
