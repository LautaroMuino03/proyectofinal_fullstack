const producto = require('../models/producto.js');


// Obtener todos los productos de la base de datos
const getProductos = async (req, res) => {
    try {
        const productos = await producto.find();
        if (!productos || productos.length === 0) {
            return res.status(404).json({ message: 'No hay productos cargados' });
        }
        return res.json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

// Función para obtener los productos por categoría
const obtenerProductosPorCategoria = async (req, res) => {
    const { category } = req.params;
    console.log("Categoría recibida:", category);  // Esto debería imprimir "celulares"
    try {
        // Aca usamos el regex para hacer que la búsqueda sea insensible a mayúsculas/minúsculas
        const productos = await producto.find({ category: { $regex: new RegExp(`^${category}$`, 'i') } });
        console.log("Productos encontrados:", productos);  // Esto mostrará los productos encontrados
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
        res.status(500).json({ error: 'Error al obtener los productos por categoría' });
    }
};





//agregar productos
const agregarProducto = async (req, res) => {
    try {
        const { title, price, category, desc, img } = req.body;
        const newProducto = new producto({ title, price, category, desc, img });
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        console.error('Error al guardar el producto:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};




//eliminar productos
const eliminarProducto = async (req, res) => {
    try{
        const eliminarProducto = await producto.findByIdAndDelete(req.params.productoId);
        if(!eliminarProducto){
            return res.status(404).json({message: 'El producto no existe'});
        }
        return res.status(201).json({message: 'Producto eliminado'});
    }catch(error){
        console.error('Error al eliminar el producto:', error);
        return res.status(500).json({message: 'Error del servidor'});
}
}

// Editar producto por ID
const editarProducto = async (req, res) => {
    try {
        const { productoId } = req.params;
        const productoActualizado = await producto.findByIdAndUpdate(productoId, req.body, { new: true });
        if (!productoActualizado) {
            return res.status(404).json({ message: 'El producto no existe' });
        }
        return res.status(200).json(productoActualizado);
    } catch (error) {
        console.error('Error al editar el producto:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};






//buscar producto por id
const getProductoId = async (req, res) => {
    try{
        const getProductoId = await producto.findById(req.params.productoId);
        if(!getProductoId){
            return res.status(404).json({message: 'El producto no existe'});
        }
        return res.status(201).json({message: 'Producto obtenido'});
    }catch(error){
        console.error('Error al obtener el producto:', error);
        return res.status(500).json({message: 'Error del servidor'});
}
}

module.exports = { getProductos, agregarProducto, eliminarProducto, getProductoId, obtenerProductosPorCategoria, editarProducto};