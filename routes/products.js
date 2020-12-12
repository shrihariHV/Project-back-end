const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/get-all-products')


router.get("/", userControllers.getProducts);

router.get("/:id", userControllers.getProductDetail);

router.post("/", userControllers.addProduct);

router.delete("/delete/:id", userControllers.deleteProduct);

router.put("/:id", userControllers.updateProduct);


module.exports = router;