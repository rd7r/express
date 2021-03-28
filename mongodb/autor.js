const mongoose = require('mongoose');

const { Schema } = mongoose;

const AutorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'se require el autor del libro']
    },
    edad:{
        type: Number,
        required: [true, 'es requerido la edad del autor']
    },
    nacionalidad:{
        type: String,
        required: [true, 'es requerido la nacionalidad']
    }
});

module.exports = mongoose.model('Autor', AutorSchema);