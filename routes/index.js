const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/', contacts.jaromRoute);
routes.get('/kayla', contacts.kaylaRoute);
routes.get('/magdelene', contacts.magdeleneRoute)

module.exports = routes; 