const express = require('express');
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetails, getMyProducts, placeBidOnProduct, getBiddedProduct} = require("../controllers/productController");
const router = express.Router();
require('../db/conn');


// CREATE PRODUCT ->> STORE USER ID WITH THIS

router.route("/product/new").post(createProduct);




// GET ALL PRODUCTS
router.route("/products").get(getAllProducts);
 

// READ -> UPDATE PRODUCT --> DELETE PRODUCT --> GET SINGLE PRODUCT
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

// GET MY  PRODUCTS
router.route("/products/myproducts").get(getMyProducts);




// GET BIDDED PRODUCT ->> BID STATUS
router.route("/products/bidstatus").get(getBiddedProduct);


// PLACE BID ON PRODUCT
router.route("/products/bid").post(placeBidOnProduct);


// // PLACE BID ON PRODUCT
// router.route("/product/bid").post(placeBidOnProduct);









module.exports = router;