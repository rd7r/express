const express = require('express');
const { getCarritoId,addCompra,deleteCompra } = require('../services/CompraService');
const app = express();
//obtener todas las compra de un usuario por el id del usuario
app.get('/compra/:cartId', async(req,res) => {
    try {
        let cartId = req.params.cartId;
        const carrito = await getCarritoId(cartId);
        return res.json(carrito);
    } catch (e) {
        console.log(e);
        res.json({message: e.message});
    }
});

app.post('/compra',async(req,res) => {
    try {
        const body = req.body;
        const compra = await addCompra(body);
        return res.json({compra});
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        })
    }

});

app.delete('/compra/:compraId', async(req,res) => {
    try {
        const compraId = req.params.compraId;
        const compra = await deleteCompra(compraId);
        return res.json({compra});
    } catch (e) {
        console.log(e);
        return res.json({message: e.message});
    } 
});

module.exports = app;