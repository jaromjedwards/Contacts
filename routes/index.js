const routes = require('express').Router();
const users = require('./users');

routes.get('/', (req, res) => (res.send('Hello World')));

routes.use('/users', users);

module.exports = routes;
