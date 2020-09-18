const Category = require('../models/category.js');

exports.getAllCategories = async function (req,res){
    categories = await Category.find().select('-videos');
    res.send(categories);
};

exports.createCategory = async function(req,res){
    category = await Category(req.body);
    await category.save();
    res.send(category);
};