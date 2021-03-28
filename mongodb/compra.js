const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompraSchema = new Schema({
    cantidad: {
        type: Number,
        require: false
    },
    libroId: {
        type: mongoose.Schema.Types.ObjectId, //este el tipo de id en mongo
        ref: 'Libro',
        required: [true, 'el libro es requerido']
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrito',
        required: [true, 'el id del carrito es requirido']
    }
});

module.exports = mongoose.model('Compra', CompraSchema);