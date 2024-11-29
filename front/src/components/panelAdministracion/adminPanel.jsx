import { useState } from 'react';
import axios from 'axios';
import useProductos from '../listaProductos/listaProductos';
import './admin.css';

const AdminPanel = () => {
  const { productos, cargando } = useProductos();
  const [nuevoProducto, setNuevoProducto] = useState({
    title: '',
    category: '',
    price: 0,
    originalPrice: 0,
    desc: ''
  });
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const manejarCambio = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const manejarAgregarProducto = async () => {
    try {
      const respuesta = await axios.post('http://localhost:3001/api/productos', nuevoProducto);
      console.log('Producto agregado:', respuesta.data);
      setNuevoProducto({ title: '', category: '', price: 0, originalPrice: 0, desc: '' });
      window.location.reload();
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  const manejarEditarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setNuevoProducto(producto);
  };

  const manejarGuardarEdicion = async () => {
    try {
      await axios.put(`http://localhost:3001/api/productos/${productoSeleccionado._id}`, nuevoProducto);
      console.log('Producto editado');
      setProductoSeleccionado(null);
      setNuevoProducto({ title: '', category: '', price: 0, originalPrice: 0, desc: '' });
      window.location.reload();
    } catch (error) {
      console.error('Error al editar el producto:', error);
    }
  };

  const manejarEliminarProducto = async (productoId) => {
    console.log('ID Producto a Eliminar:', productoId);
  
    try {
      const respuesta = await axios.delete(`http://localhost:3001/api/productos/${productoId}`);
      console.log('Producto eliminado:', respuesta.data);
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };
  
  

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1 className='titulo-admin'>Panel de Administración de Productos</h1>

      {/* Formulario para agregar o editar producto */}
      <h2 className='titulo-admin'>{productoSeleccionado ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <div className='formulario'>
        <input
          type="text"
          name="title"
          placeholder="Título del producto"
          value={nuevoProducto.title}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={nuevoProducto.category}
          onChange={manejarCambio}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio con descuento"
          value={nuevoProducto.price}
          onChange={manejarCambio}
        />
        <input
          type="number"
          name="originalPrice"
          placeholder="Precio original del producto"
          value={nuevoProducto.originalPrice}
          onChange={manejarCambio}
        />
        <textarea
          name="desc"
          placeholder="Descripción del producto"
          value={nuevoProducto.desc}
          onChange={manejarCambio}
        />
        {productoSeleccionado ? (
          <button onClick={manejarGuardarEdicion} className='boton-admin'>Guardar Cambios</button>
        ) : (
          <button onClick={manejarAgregarProducto} className='boton-agregar-producto'>Agregar</button>
        )}
      </div>

      {/* Lista de productos */}
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            <span>{producto.title} - ${producto.price}</span>
            <button onClick={() => manejarEditarProducto(producto)} className='boton-admin-2'>Editar</button>
            <button onClick={() => manejarEliminarProducto(producto._id)} className='boton-admin-2'>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
