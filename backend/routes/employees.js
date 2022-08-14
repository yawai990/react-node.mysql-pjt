const express = require('express');
const {getAllstaffs,getSingleStaff,addStaff,updateStaffs,deleteStaff} = require('../controller/staff');
const employeesRouter = express.Router();

employeesRouter.get('/',getAllstaffs)
                            .get('/:id',getSingleStaff)
                            .post('/add_staff',addStaff)
                            .patch('/:id',updateStaffs)
                            .delete('/:id',deleteStaff)
         

module.exports = employeesRouter;