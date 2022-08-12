const {connection} = require('../db/db');

// routes : localhost:5000/api/staffs
 const getAllstaffs =async (req,res)=>{

    await connection.query("SELECT id,name,nrc,education,phone,DATE_FORMAT(dob,'%d-%m-%y') AS 'dob',dept,position,status,image,other_qulification FROM employees",(err,results)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
};

 const getSingleStaff =async (req,res)=>{
        const id =req.params.id;

        await connection.query(`SELECT id,name,nrc,education,phone,DATE_FORMAT(dob,'%d-%m-%Y') AS 'dob',dept,position,status,image,other_qulification FROM employees WHERE id = ${id}`,(err,result)=>{
            if(err) throw err;
            res.status(200).json(result);
        })
};

const addStaff =async(req,res)=>{
    const {name,nrc,education,phone,dob,dept,position,status,image,other_qulification} = req.body;

    await connection.query(`INSERT INTO employees(name,nrc,education,phone,dob,dept,position,status,image,other_qulification)
    VALUES('${name}','${nrc}','${education}','${phone}','${dob}','${dept}','${position}','${status}','${image ? image:''}','${other_qulification ? other_qulification:'null'}')`,(err,result)=>{
        if(err) throw err;
        res.status(204).json({
            message:"new employee added successfully"
        })
    })
}
 const updateStaffs =async (req,res)=>{
    const id =req.params.id;

    const {name,nrc,education,phone,dob,dept,position,status,image,other_qulification} = req.body;


    console.log(req.body)
    await connection.query(`UPDATE employees SET name='${name}',nrc='${nrc}',education='${education}',phone='${phone}',dob='${dob}',dept='${dept}',position='${position}',status='${status}',image='${image ? image:''}',other_qulification='${other_qulification ? other_qulification:null}' WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        res.status(204).json({message:'Data updated'})
    })
};

 const deleteStaff =async(req,res)=>{
    
    const id =parseInt(req.params.id);


    await connection.query(`DELETE FROM employees WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        
        res.status(200).json(result)
    })
}

module.exports ={getAllstaffs,getSingleStaff,updateStaffs,deleteStaff,addStaff}
