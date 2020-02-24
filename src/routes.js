const express = require('express');
const routes = express.Router();
const ProducteController = require('./controller/ProductController');

routes.get('/products', ProducteController.index);
routes.get('/products/:id', ProducteController.show);
routes.post('/products', ProducteController.store);
routes.put('/products/:id', ProducteController.update);
routes.delete('/products/:id', ProducteController.destroy);

module.exports = routes;