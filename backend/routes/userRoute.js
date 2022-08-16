const express = require('express');
const userRoute  = express.Router();
const {login,signUp,getAllUsers,deleteUser} = require('../controller/user.js');

userRoute.post('/login',login)
                .post('/create-user',signUp)
                .get('/get_users',getAllUsers)
                .delete('/delete_user/:id',deleteUser);

module.exports = userRoute;