const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');

const hashAndUpdatePassword = async () => {
    const email = "Lautaromuino2003@gmail.com"; // usuario admin
    const plainPassword = "Lautaromuiño"; // contraseña admin

    try {
        // Conecta a la base de datos usando MONGO_URI
        await mongoose.connect(process.env.MONGO_URI); 

        console.log('Conectado a la base de datos...');

        // Genera el hash de la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        // Actualiza la contraseña en la base de datos
        const result = await User.findOneAndUpdate(
            { email }, // Encuentra el usuario por email
            { password: hashedPassword }, // Actualiza el password
            { new: true } // devuelve el documento actualizado
        );

        if (result) {
            console.log('Contraseña hasheada y actualizada:', result);
        } else {
            console.log('Usuario no encontrado.');
        }

        // Cierra la conexión
        mongoose.connection.close();
    } catch (error) {
        console.error('Error al actualizar la contraseña:', error);
    }
};

hashAndUpdatePassword();

