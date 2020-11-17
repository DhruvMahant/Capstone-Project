const Product = require('../models/ProductModel');



exports.findAll = (req, res) => {
    Product.find({}).populate('company').exec(function(err,data){
        res.send(data);
    })
        
};


exports.findById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
};

exports.addProduct = (req, res) => {
    Product.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
    })
};

exports.removeById = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
}

exports.updateById = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
}






// .then(products => {
//     res.send(products);
// }).catch(err => {
//     res.status(500).send({
//         message: err.message
//     });
// });