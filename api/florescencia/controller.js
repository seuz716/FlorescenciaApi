const express = require ('express');
const controladorFlorescencia = express.Router();

controladorFlorescencia.get("/obtenerplantas", function (req, res) {
    res.send("listando plantas....");
});

module.exports = controladorFlorescencia;
