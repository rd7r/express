const express = require('express');
const { getlibro,getlibroById,addlibro,updatelibro, deletelibro } = require('../services/LibroService');
const app = express();

app.get('/libros', async (req, res) => {
    try {
        let from = req.params.from || 0;
        from = Number(from);
        let limit = req.params.limit || 3;
        limit = Number(limit);
        attributes = 'id titulo descripcion precio state';
        return res.status(200).json(await getlibro(from, limit, null, attributes));
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
});

app.get('/libros/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const libroId = getlibroById(id);
        return res.json(libroId);
    } catch (e) {
        console.log(e);
        return res.json({message: e.message})
    }
})

app.post('/libros', async(req, res) => {
    //console.log(req.body);
    try {
        let body = req.body;
        const libro = await addlibro(body);
        return res.status(201).json(libro);
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        });
    };
});

app.put('/libros/:libroId', async(req,res) => {
    // console.log(req.params.libroId);
    try {
        const body = req.body;
        let libroId = req.params.libroId;
        const libro = updatelibro({libroId,...body});
        return res.json(libro);
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        })
    }
});

app.delete('/libros/:libroId',async(req,res) => {
    try {
        let libroId = req.params.libroId;
        const libro = await deletelibro(libroId);
        return res.json({libro});
    } catch (e) {
        console.log(e)
        return res.json({
            message: e.message
        })
    }
});


module.exports = app;