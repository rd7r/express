const express = require('express');
const { getAutor, addAutor, updateAutor } = require('../services/AutorService');
const app = express();

app.get('/autor', async (req, res) => {
    try {
        let from = req.params.from || 0;
        from = Number(from);
        let limit = req.params.limit || 3;
        limit = Number(limit);
        attributes = 'id nombre edad nacionalidad';
        return res.status(200).json(await getAutor(from, limit, null, attributes));
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
});

app.post('/autor', async(req, res) => {
    //console.log(req.body);
    try {
        let body = req.body;
        const autor = await addAutor(body);
        return res.status(201).json(autor);
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        });
    };
});

app.put('/autor/:autorId', async(req,res) => {
    // console.log(req.params);
    try {
         const autorId = req.params.autorId;
         const body = req.body;
         
         const autor = await updateAutor({autorId,...body});
         return res.json(autor);
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        })
    }
});

module.exports = app;