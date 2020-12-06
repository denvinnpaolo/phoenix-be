//packages
require('dotenv').config()

const express = require('express');

// middleware
const serverConfig = require('./middleware/ConfigAPI.js');

// routes
const userRoutes = require('./api/users/routes.js');
const wasteRoutes = require('./api/waste/routes.js');

// server starts
const server = express();
serverConfig(server);


server.use('/', userRoutes);
server.use('/organic-waste', wasteRoutes); 

server.get('/', (req, res) => {res.status(200).json({api: 'Server is up and running :)'})});

module.exports = server;