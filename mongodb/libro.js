const mongoose = require('mongoose');

const { Schema } = mongoose;

const LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'se require titulo']
    },
    descripcion:{
        type: String,
        required: [true, 'se require titulo del libro']
    },
    precio:{
        type: Number,
        required: [true, 'es require el precio del libro']
    },
    state:{
        type: Boolean,
        default: true
    },
    autorId: {
        type: mongoose.Schema.Types.ObjectId, //este el tipo de id en mongo
        ref: 'Autor',
        required: [true, 'el autor es requerido']
    }
});

module.exports = mongoose.model('Libro', LibroSchema);