const express = require('express');
const { getCarrito,addCarrito } = require('../services/CarritoService');
const app = express();

app.get('/carrito', async (req, res) => {
    try {
        let attributes = 'id nit name';
        res.json(await getCarrito(attributes));
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
});

app.post('/carrito',async(req,res) => {
    try {
        const body = req.body;
        const carrito = await addCarrito(body);
        return res.json(carrito);
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        })
    }
});

// app.delete('./carrito', async(req,res) => {

// });

module.exports = app;