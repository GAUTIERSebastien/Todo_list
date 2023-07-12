const { addUser, addTodo, getUsers, getUser } = require('../database/database');

exports.getUsers = (req, res) => {
  const users = getUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const name = req.body.name;
  const newUserId = addUser(name);
  res.status(201).json({ id: newUserId });
};

exports.getTodos = (req, res) => {
  const userId = req.params.userId;
  const user = getUser(userId);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user.todos);
  }
};

exports.createTodo = (req, res) => {
  const userId = req.params.userId;
  const title = req.body.title;
  const category = req.body.category;
  addTodo(userId, title, category);
  res.status(201).end();
};

