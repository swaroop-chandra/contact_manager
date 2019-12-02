const express = require('express')
const router = express.Router()
const contactsController = require('../app/controller/contactsController')
const usersController=require('../app/controller/usersController')
const authenticateUser=require('../app/middleware/authentication')

router.get('/contacts',authenticateUser, contactsController.list)
router.post('/contacts',authenticateUser, contactsController.create)
router.get('/contacts/:id',authenticateUser, contactsController.show)
router.put('/contacts/:id',authenticateUser, contactsController.update)
router.delete('/contacts/:id',authenticateUser, contactsController.destroy)

//user-authentication
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser, usersController.logout)



module.exports = router