const { Router } = require('express');
const uploadFiles = require('../controller/controller.upload');


const route = Router()

route.get('/', uploadFiles)

module.exports = route;