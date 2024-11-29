const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para evitar colisiones
    }
});

// Filtro para validar tipo de archivo
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Aceptar archivo
    } else {
        cb(new Error('El archivo no es una imagen'), false); // Rechazar archivo
    }
};

// Middleware de multer
const upload = multer({ storage, fileFilter });

module.exports = upload;
