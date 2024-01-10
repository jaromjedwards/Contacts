const routes = require('express').Router();
const lesson1Controller = require('../controllers/contacts');

routes.get('/', lesson1Controller.jaromRoute);
routes.get('/kayla', lesson1Controller.kaylaRoute);
routes.get('/magdelene', lesson1Controller.magdeleneRoute)

module.exports = routes; 