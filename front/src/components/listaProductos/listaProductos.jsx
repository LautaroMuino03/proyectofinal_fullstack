import { useEffect, useState } from 'react';
import axios from 'axios';

const useProductos = (category) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        
        const url = category
          ? `http://localhost:3001/api/productos?category=${category}` // filtra por categoria
          : 'http://localhost:3001/api/productos';
        
        const response = await axios.get(url);
        console.log("Productos obtenidos:", response.data); // Muestra los productos en consola
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProductos();
  }, [category]);

  return { productos, loading };
};

export default useProductos;
