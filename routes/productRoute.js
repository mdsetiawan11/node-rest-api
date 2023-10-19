const express = require('express');
const router = express.Router()
const Product = require('../models/productModel')
const {getProducts,getProductById, AddNewProduct, EditProduct, DeleteProduct} = require('../controllers/productController')

//get all product
router.get('/', getProducts)
// get produck by id
router.get('/:id', getProductById)
//add new product
router.post('/', AddNewProduct)
//update a product
router.put('/:id', EditProduct)
//delete product
router.delete('/:id', DeleteProduct)

module.exports = router;