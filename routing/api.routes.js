const router = require('express').Router();
const {
  getTodos,
  createTodo,
  editTodo
} = require('../controllers/api.ctrl');

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', editTodo);

module.exports = router;
