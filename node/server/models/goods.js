var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    "checked":String
});
module.exports = mongoose.model('Good',produtSchema);