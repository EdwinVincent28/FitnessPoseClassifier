const express = require('express');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

const {loginUser, signupUser} = require('../controllers/userController')

// router.post('/login', loginUser);

// router.post('/signup', signupUser);

module.exports = router;