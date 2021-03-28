const mongoose = require('mongoose');
const Libro = require('../mongodb/libro');

const getlibro = async(from, limit, filters, attributes) => {
    const rows = await Libro.find(filters,attributes).
        skip(from).
        limit(limit).
        exec();
    const count = await Libro.find(filters).countDocuments();
    return {count, rows}
};

const getlibroById = async(id) => {
    return await Libro.findOne({_id: id});
}

const addlibro = async({titulo, descripcion, precio,autorId}) => {
    const libro = new Libro({titulo,descripcion,precio,autorId});
    return await libro.save();
};

const updatelibro = async({libroId, titulo, descripcion, precio,state}) => {
    return await Libro.findByIdAndUpdate(
        libroId,
        { titulo, descripcion, precio, state}
    );
}

const deletelibro = async(id) => {
    const deleteState = {
        state: false
    }
    const libro = await Libro.findByIdAndUpdate(id,deleteState);
    return libro;
};

module.exports = {
    getlibro,
    getlibroById,
    addlibro,
    updatelibro,
    deletelibro
}