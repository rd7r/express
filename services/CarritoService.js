const CarritoRepository = require('../MongoDBRepository/CarritoRepository');

const getCarrito = async(attributes,filters) => {
    const {count, rows} = await CarritoRepository.getCarrito(attributes,filters);
    return {count, carrito: rows};
};

const addCarrito = async({nit, name}) => {
    return await CarritoRepository.addCarrito({nit, name}); 
};

module.exports = {
    getCarrito,
    addCarrito
}