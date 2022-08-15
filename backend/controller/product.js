const {connection} = require('../db/db');

const getProducts =async (req,res)=>{
   
    connection.query('SELECT * FROM products',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
};

const getOneProduct =async (req,res)=>{
    const id = parseInt(req.params.id);
 
    await connection.query(`SELECT * FROM products WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
};

const createProduct =async (req,res)=>{
    const {productName,image,selling1,selling2,purchase,product_type,stock}= req.body;

    await connection.query(`INSERT INTO products(image,productName,purchase,selling1,selling2,stock,product_type) VALUES('${image || ''}','${productName}',${purchase},${selling1},${selling2},'${stock}','${product_type || 0}')`,(err,result)=>{
        if(err) throw err;
        res.status(202).json({
            message:'New Product added successfully'
        })
    })

};

const updateProduct =async (req,res)=>{
    const id = parseInt(req.params.id);
    const {productName,image,selling1,selling2,purchase,product_type,stock}= req.body;

    connection.query(`UPDATE products SET productName ='${productName}',image='${image}',purchase=${purchase},selling1=${selling1},selling2=${selling2},product_type ='${product_type}',stock=${stock} WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json({
             message:`product updated`
        })
    })
};

const deleteProduct =async (req,res)=>{
    const id = parseInt(req.params.id);

    connection.query(`DELETE FROM products WHERE id =${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            message:`product deleted`
        })
    })
};

module.exports ={getProducts,getOneProduct,createProduct,updateProduct,deleteProduct};