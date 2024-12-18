const mongoose = require('mongoose');

//conexion a la base de datos
const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Base de datos MongoDB conectada...');
  } catch (error) {
      console.error('Error al conectar la Base de datos:', error);
      process.exit(1); 
  }
};

module.exports = connectDB;


/*  mongodb://localhost:27017/base_productos */ //conexion local