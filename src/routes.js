const knex = require('./database');
const express = require('express');

const userController = require('./controllers/UserController')
const projectController = require("./controllers/ProjectController")

const routes = express.Router()

routes.get("/users",userController.index)
routes.post("/users",userController.create)
routes.put("/users/:id",userController.update)
routes.delete("/users/:id",userController.delete)

routes.get("/projects",projectController.index)
routes.get("/projectsFifty",projectController.greaterFifty)
routes.post("/projects",projectController.create)


routes.get("/projects/:id",projectController.editOrder)
routes.post("/projects/:id",projectController.updateOrder)

module.exports= routes
