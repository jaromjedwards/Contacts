const routes = require('express').Router();
const usersController = require('../controllers/users');

routes.get('/all', usersController.getAll);
routes.get('/single/:id', usersController.getSingle);

module.exports = routes;