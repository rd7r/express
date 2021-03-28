const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarritoSchema = new Schema({
    nit: 
    {
        type: String,
        required: [true, 'es requido el nit']
    },
    name: 
    {
        type: String,
        require: [true,'es requerido el name']
    }
});

module.exports = mongoose.model('Carrito',CarritoSchema);