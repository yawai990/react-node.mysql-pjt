const express = require('express');
const {getAllstaffs,getSingleStaff,addStaff,updateStaffs,deleteStaff} = require('../controller/staff');
const employeesRouter = express.Router();

employeesRouter.get('/staffs',getAllstaffs)
                            .get('/staffs/:id',getSingleStaff)
                            .post('/staffs/add_staff',addStaff)
                            .patch('/staffs/:id',updateStaffs)
                            .delete('/staffs/:id',deleteStaff)
         

module.exports = employeesRouter;