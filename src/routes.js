const express = require('express')
const multer = require('multer')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const configUpload = require('./config/upload')


const routes = express.Router()
const upload = multer(configUpload)


routes.post('/sessions', SessionController.Store)

routes.get('/spots', SpotController.Index)
routes.post('/spots', upload.single('thumbnail') ,SpotController.Store)

routes.get('/dashboard', DashboardController.Show)

routes.post('/spots/:spot_id/bookings', BookingController.Store)



module.exports = routes