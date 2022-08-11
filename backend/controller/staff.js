const {connection} = require('../db/db');

// routes : localhost:5000/api/staffs
 const getAllstaffs =async (req,res)=>{

    await connection.query("SELECT id,name,nrc,education,phone,DATE_FORMAT(dob,'%d-%m-%y') AS 'dob',dept,position,status,image,other_qulification FROM employees",(err,results)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
};

 const getSingleStaff =async (req,res)=>{
        const id =parseInt(req.params.id);

        await connection.query(`SELECT * FROM employees WHERE id = ${id}`,(err,result)=>{
            if(err) throw err;
            res.status(200).json(result);
        })
};

 const updateStaffs =async (req,res)=>{
    const id =parseInt(req.params.id);

    await connection.query(`SELECT * FROM employees WHERE id = ${id}`,(err,result)=>{
        if(err) throw err;

        //getting the data from database
       res.status(200).json(result)

    });
    // const {name,nrc,education,phone,address,dob,hiredate,dept,position,status,image,other} = req.body;

    // await connection.query(`UPDATE employees SET name='${name}',nrc='${nrc}',education='${education}',phone=${phone},address='${address}',dob='${dob}',hiredata=${hiredate},dept='${dept}',position='${position}',status='${status}',image='${image}',other_qulification='${other} WHERE id=${id}'`,(err,result)=>{
    //     if(err) throw err;
    //     res.status(204).json({message:'Data updated'})
    // })
};

 const deleteStaff =async(req,res)=>{
    
    const id =parseInt(req.params.id);


    await connection.query(`DELETE FROM employees WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        
        res.status(200).json(result)
    })
}

module.exports ={getAllstaffs,getSingleStaff,updateStaffs,deleteStaff}
