const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAll);
routes.get('/single/:id', contactsController.getSingle);

module.exports = routes;