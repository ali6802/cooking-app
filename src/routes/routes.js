const express = require('express')
const routes = express.Router()
const PagesController = require('../controllers/pagesController')

const pagesController = new PagesController()

routes.get('/',pagesController.home)
routes.get('/recipe/:id',pagesController.findById)
routes.get('/search',pagesController.search)

module.exports = routes

