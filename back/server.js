const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session'); // Importar express-session
const authroutes = require('./routes/authroutes.js');
const productoroutes = require('./routes/productoroutes.js');


require('dotenv').config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Permite leer JSON en el servidor
app.use(morgan('dev'));  // Muestra las peticiones en la consola



const origenesPermitidos = ['http://localhost:10000'];


const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || origenesPermitidos.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Cliente no permitido'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], // Asegura que OPTIONS esté permitido
    allowedHeaders: ['Content-Type', 'Authorization'], // Agrega aquí los encabezados necesarios
    credentials: true // Permite el envío de cookies
    
};


// Agregar middleware CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // maneja las solicitudes OPTIONS

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.sendStatus(204); 
    } else {
        next();
    }
});




// rutas de autenticación
app.use('/api/auth', authroutes);

// Rutas
app.use('/api/productos', productoroutes);

// Configuración de las rutas para archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Configuración de express-session
app.use(session)

// Configuración del puerto
const PORT = process.env.PORT || 3001;
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
