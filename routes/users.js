const express = require('express');
const router = express.Router();

const loginController = require('../controllers/users')


router.post("/login", loginController.userLogin);

router.post("/register", loginController.userRegister);


module.exports = router;