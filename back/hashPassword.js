const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user'); // Asegúrate de que la ruta sea correcta

const hashAndUpdatePassword = async () => {
    const email = "Lautaromuino2003@gmail.com"; // Tu email del usuario admin
    const plainPassword = "Lautaromuiño"; // Tu contraseña actual en texto plano

    try {
        // Conecta a la base de datos
        await mongoose.connect('mongodb://localhost:27017/base_productos',)

        console.log('Conectado a la base de datos...');

        // Genera el hash de la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        // Actualiza la contraseña en la base de datos
        const result = await User.findOneAndUpdate(
            { email }, // Encuentra el usuario por email
            { password: hashedPassword }, // Actualiza el campo password
            { new: true } // Devuelve el documento actualizado
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
