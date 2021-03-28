const CompraRepository = require('../MongoDBRepository/CompraRepository');

const getCarritoId = async(cartId) => {
    return await CompraRepository.getCarritoId(cartId);
}

const addCompra = async({cantidad, libroId, cartId}) => {
    return await CompraRepository.addcompra({cantidad,libroId, cartId});
};

const deleteCompra = async(compraId) => {
    return await CompraRepository.deletecompra(compraId);
};

module.exports = {
    addCompra,
    deleteCompra,
    getCarritoId
}