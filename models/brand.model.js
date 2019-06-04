const mongoose = require('mongoose');

//Construyendo el esquema
const brandSchema = new mongoose.Schema({
    brand: {
        type: String, 
        required: true
    }
});

//Modelo
const brandModel = mongoose.model('Brand', brandSchema, 'brands');

module.exports = brandModel;
