const router=require('express').Router()

// import controllers
const RegistrationController = require('../controllers/RegistrationController')
const LoginController = require('../controllers/LoginController')

// create user account
router.post('/register', RegistrationController.storeUser)

// authenticate user
router.post('/login', LoginController.authenticateUser)

// import routes
const depositRoute = require('./deposit')
router.use('/deposits', depositRoute)


module.exports = router