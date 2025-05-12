// Importar librerías necesarias
const express = require('express');
const cors = require('cors');

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'lucas', 'sofia'];

app.get('/validar/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase().trim();
    if (usuariosValidos.includes(nombre)) {
        res.json({ 
            valido: true, 
            mensaje: `El nombre ${nombre} es válido.` 
        });
    } else {
        res.json({ 
            valido: false, 
            mensaje: `El nombre ${nombre} no es válido.` 
        });
    }
});

app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase().trim();
    if (usuariosValidos.includes(nombre)) {
        res.json({ 
            saludo: `¡Hola, ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}! Bienvenido/a.` 
        });
    } else {
        res.status(400).json({ 
            error: 'Nombre no válido' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});