const LibroRepository = require('../MongoDBRepository/LibroRepository');

const getlibro = async(from, limit, filters,attributes) => {
    let defaultfilters = {
        state: true
    }
    if (!filters) {
        filters = defaultfilters;
    } else {
        filters = {...defaultfilters,...filters};
    }
    const {count, rows } = await LibroRepository.getlibro(from,limit,filters,attributes);
    return {count, libro: rows};
}

const getlibroById = async(id) =>{ return await LibroRepository.getlibroById(id); }

const addlibro = async({titulo,descripcion,precio,autorId}) => {
    return libro = await LibroRepository.addlibro({titulo,descripcion,precio,autorId});
}

const updatelibro = async({libroId, titulo, descripcion, precio, state}) => {
    return await LibroRepository.updatelibro({libroId, titulo, descripcion, precio,state});
};

const deletelibro = async(id) => {
    return await LibroRepository.deletelibro(id);
}

module.exports = {
    getlibro,
    getlibroById,
    addlibro,
    updatelibro,
    deletelibro
}