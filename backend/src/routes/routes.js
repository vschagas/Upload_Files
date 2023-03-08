const { Router } = require('express');
const uploadFiles = require('../controller/controller.upload');
const multer = require('multer')
const multerConfig = require('../config/multer')


const route = Router()

route.post('/posts', multer(multerConfig).single('file'), uploadFiles)

module.exports = route;