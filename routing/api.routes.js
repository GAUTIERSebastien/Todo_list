const router = require('express').Router();
const {
  getUsers,
  createUser,
  getTodos,
  createTodo
} = require('../controllers/api.ctrl');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId/todos', getTodos);
router.post('/users/:userId/todos', createTodo);

module.exports = router;
