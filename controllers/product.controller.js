const Product = require('../models/product.model.js');

const getProducts = async(req, res) => {
    try{

        const data =  await Product.find({});

        res.status(200).json(data);

    }catch (err){

        res.status(500).json({message: err.message});
    }
}

const getProduct = async (req, res) => {

    try{

        const { id } = req.params;
        const data =  await Product.findById(id);
        res.status(200).json(data);

    }catch (error){

        res.status(500).json({message: error.message});
    }
}

const createProduct = async (req, res) => {

    try{

        const data = req.body;
        const product = await Product.create(data);
        res.status(200).json(product);

    }catch(error){

        res.status(500).json({message: error.message});
    }
}

const updateProduct = async (req, res) => {

    try{

        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id);
        if(!product){
            res.status(404).json({message: "Product not found"});
        }

        const data = await Product.findById(id);
        res.status(200).json(data);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const deleteProduct = async (req, res) => {

    try{

        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message: "Product Not found"});
        }

        res.status(200).json({message: "Product Removed!!"});

    }catch (error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};