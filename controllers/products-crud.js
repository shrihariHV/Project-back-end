
const productService = require('../services/product-service')

//Using then and catch
exports.getProducts = async function(req, res, next) {
        productService.allProducts().then(products => {
            return res.status(200).json({ success: true, data: products});
        }).catch(e => {
            res.status(400).json({ success: false, error: e.message});
        });
}

//Using try and catch
exports.getProductDetail = async function(req, res, next) {
    try {
        let products = await productService.productDetail(req.params.id);
        return res.status(200).json({ success: true, data: products});
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}

//Add product
exports.addProduct = async function(req, res, next) {
    try {
        let products = await productService.insertProduct(req.body.name, req.body.price);
        return res.status(200).json({ success: true, data: "Data inserted successfully"});
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}

//Delete product
exports.deleteProduct = async function(req, res, next) {
    try {
        let products = await productService.deleteProduct(parseInt(req.params.id, 10));
        return res.status(200).json({ success: true, data: "Product deleted successfully"});
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}

//update product
exports.updateProduct = async function(req, res, next) {
    try {
        let fields = {};
        fields['name'] = req.body.name;
        fields['price'] = req.body.price;
        let products = await productService.updateProduct(parseInt(req.params.id, 10), fields);
        return res.status(200).json({ success: true, data: products});
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}