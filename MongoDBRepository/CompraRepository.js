const Compra = require('../mongodb/compra');

const getCarritoId = async (id) => {
    return await Compra.find({cartId: id}) ;
}

const addcompra = async({cantidad,libroId,cartId}) => {
    const compra = new Compra({cantidad,libroId,cartId});
    return await compra.save();
}

const deletecompra = async(compraId) => {
    const compra = await Compra.findOneAndDelete(compraId)
    return compra;
}

module.exports = {
    addcompra,
    deletecompra,
    getCarritoId
}