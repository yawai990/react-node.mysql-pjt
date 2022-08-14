const {connection} = require('../db/db');

const getProducts =async (req,res)=>{
   
    connection.query('SELECT * FROM products',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
};

const getOneProduct =async (req,res)=>{
    const id = parseInt(req.params.id);
 
    connection.query(`SELECT * FROM products WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
};

const createProduct =async (req,res)=>{
    const {productName,image,selling1,selling2,purchase,productType,stock}= req.body;

    connection.query(`INSERT INTO products(image,productName,purchase,selling1,selling2,stock,productType) VALUES('${image}','${productName}','${purchase}','${selling1}'.'${selling2}','${productType}',${stock}')`,(err,result)=>{
        if(err) throw err;
        res.status(202).json({
            message:'new product added successfully'
        })
    })
};

const updateProduct =async (req,res)=>{
    const id = parseInt(req.params.id);
    const {productName,image,selling1,selling2,purchase,productType,stock}= req.body;

    connection.query(`UPDATE products SET productName ='${productName}',image='${image}',purchase=${purchase},selling1=${selling1},selling2=${selling2},productType ='${productType}',stock=${stock}`,(err,result)=>{
        if(err) throw err;
        res.status(204).json({
             message:`${result[0].productName} updated`
        })
    })
};

const deleteProduct =async (req,res)=>{
    const id = parseInt(req.params.id);

    connection.query(`DELETE FROM products WHERE id =${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            message:`${result[0].productName} deleted`
        })
    })
};

module.exports ={getProducts,getOneProduct,createProduct,updateProduct,deleteProduct};