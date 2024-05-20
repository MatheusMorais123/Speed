const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
//const ProjectController = require('./controllers/ProjectController')
const SpeedController = require('./controllers/SpeedController')
routes
    // Users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    
    //Speed
    .post('/speed', SpeedController.create)
    .get('/speed', SpeedController.index)
    .post('/cancel/:corrida_id', SpeedController.cancel)
    .get('/speed/:id', SpeedController.findById)
    
module.exports = routes