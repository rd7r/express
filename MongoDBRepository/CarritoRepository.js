const Carrito = require('../mongodb/carrito');

const getCarrito = async(attributes,filters) => {
    const rows = await Carrito.find(filters,attributes).exec();

    const count = await Carrito.find(filters).countDocuments();
    return {count, rows};
}

const addCarrito = async({nit, name}) => {
    const carrito = new Carrito({nit, name});
    return await carrito.save();
};

module.exports = {
    getCarrito,
    addCarrito
}