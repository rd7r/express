const mongoose = require('mongoose');
const Autor = require("../mongodb/autor");

const getAutors = async (from, limit, filters, attributes) => {
    const rows = await Autor.find(filters,attributes)
    .skip(from)
    .limit(limit)
    .exec();

    const count = await Autor.find(filters).countDocuments();
    return {rows, count};
};

const addAutor = async({nombre, edad, nacionalidad}) => {
    const autor = new Autor({nombre,edad,nacionalidad});
    return await autor.save();
};
const updateAutor = async ({autorId, nombre,edad,nacionalidad}) => {
    const autor = await Autor.findByIdAndUpdate(
        autorId,
        {nombre,edad,nacionalidad}
    );
    return autor;
};

module.exports = {
    getAutors,
    addAutor,
    updateAutor
}