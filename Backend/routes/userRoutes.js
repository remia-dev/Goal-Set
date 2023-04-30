const express = require('express')
const { registerUser, loginUser, getMe } = require('../controllers/userController')
const router = express.Router()

const { protect } = require('../middleware/authMiddleware')

// Register, Login, and User display
router.post('/', registerUser)
router.post('/login',loginUser )
router.get('/me',protect, getMe)




module.exports = router