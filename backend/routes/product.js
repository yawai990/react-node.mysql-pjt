const express = require('express');
const productRouter = express.Router();
const {getProducts,createProduct,updateProduct,deleteProduct,getOneProduct} = require('../controller/product');

productRouter.get('/',getProducts)
                        .get('/:id',getOneProduct)
                        .post('/add_product',createProduct)
                        .patch('/:id',updateProduct)
                        .delete('/:id',deleteProduct);

module.exports = productRouter;