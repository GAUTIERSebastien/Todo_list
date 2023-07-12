const { addUser, getUsers } = require('../database/database');

exports.homeCtrl = (req, res) => {
  res.render('home');
};

exports.usersCtrl = (req, res) => {
  // Utilisez votre fonction pour récupérer les utilisateurs de votre base de données
  const users = getUsers();
  res.render('users', { users: users });
};

exports.createUser = (req, res) => {
  res.render('createUser');
};

exports.postCreateUser = (req, res) => {
  const name = req.body.name;
  addUser(name);
  res.redirect('/users');
};
