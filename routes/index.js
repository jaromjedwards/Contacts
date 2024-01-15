const routes = require('express').Router();
const contacts = require('./contacts');

routes.get('/', (req, res) => (res.send('Hello World')));

routes.use('/contacts', contacts);

module.exports = routes;
