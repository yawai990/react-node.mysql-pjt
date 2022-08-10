const express = require('express');
const {getAllstaffs,getSingleStaff,updateStaffs,deleteStaff} = require('../controller/staff');
const employeesRouter = express.Router();

employeesRouter.get('/staffs',getAllstaffs)
                            .get('/staffs/:id',getSingleStaff)
                            .patch('/staffs/:id',updateStaffs)
                            .delete('/staffs/:id',deleteStaff)
         

module.exports = employeesRouter;