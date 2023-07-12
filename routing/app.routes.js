const router = require('express').Router();
const {
  homeCtrl,
  usersCtrl,
  createUser,
  postCreateUser
} = require('../controllers/app.ctrl');

router.get('/', homeCtrl);
router.get('/users', usersCtrl);
router.get('/create-user', createUser);
router.post('/create-user', postCreateUser);

module.exports = router;
