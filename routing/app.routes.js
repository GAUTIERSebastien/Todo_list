const router = require('express').Router();
const {
  homeCtrl,
  usersCtrl,
  createUser,
  postCreateUser,
  userTodosCtrl
} = require('../controllers/app.ctrl');

router.get('/', homeCtrl);
router.get('/home', homeCtrl);
router.get('/users', usersCtrl);
router.get('/create-user', createUser);
router.get('/users/:userId/todos', userTodosCtrl);
router.post('/create-user', postCreateUser);

module.exports = router;
