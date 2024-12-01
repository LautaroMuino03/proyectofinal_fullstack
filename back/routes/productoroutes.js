const express = require('express');
const { getProductos, agregarProducto, eliminarProducto, getProductoId, obtenerProductosPorCategoria, editarProducto} = require('../controllers/productocontrollers.js');
const router = express.Router();
const upload = require('../uploads/uploads.js');



router.get('/categoria/:category', obtenerProductosPorCategoria); 
router.get('/', getProductos);
router.get('/:productoId', getProductoId);
router.post('/', agregarProducto);
router.delete('/:productoId', eliminarProducto);
router.put('/:productoId', editarProducto);
router.post('/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha subido ninguna imagen' });
        }
        // Devolver la ruta de la imagen subida
        res.status(201).json({ imagePath: `/uploads/${req.file.filename}` });
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).json({ message: 'Error del servidor al subir la imagen' });
    }
});




module.exports = router;