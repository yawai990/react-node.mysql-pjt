const express = require('express');
const userRoute  = express.Router();
const {login,signUp} = require('../controller/user.js');

userRoute.post('/login',login)
                .post('/create-user',signUp)

module.exports = userRoute;