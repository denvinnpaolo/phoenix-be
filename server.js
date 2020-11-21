//packages
const express = require('express');

// middleware
const serverConfig = require('./middleware/ConfigAPI.js')

// routes
const userRoutes = require('./api/users/routes.js')

// server starts
const server = express();
serverConfig(server);


server.use('/howdy', userRoutes);

server.get('/', (req, res) => {res.status(200).json({api: 'Good to Go'})});

module.exports = server;