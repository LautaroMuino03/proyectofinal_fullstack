import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Celulares.css';
import CartContext from '../../CartContext/CartContext';
import useProductos from '../../listaProductos/listaProductos';

function Celulares() {
  const { addToCart } = useContext(CartContext);
  const { productos, loading } = useProductos();

  // Estado para manejar la visibilidad de la descripción de cada producto
  const [showDesc, setShowDesc] = useState({});

  if (loading) return <p>Cargando productos...</p>;

  // Filtra localmente solo los productos con categoría "celulares"
  const celulares = productos.filter((producto) => producto.category === 'celulares');

  // Función para alternar la visibilidad de la descripción
  const toggleDesc = (id) => {
    setShowDesc((prev) => ({
      ...prev,
      [id]: !prev[id] // Cambia el estado específico de la tarjeta por su id
    }));
  };

  return (
    <div>
      <div className='padre-cartas'>
        {celulares.map((celular) => (
          <Card key={celular._id} className='carta' style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={`http://localhost:3001${celular.img}`} alt={celular.title} />
            <Card.Body>
              <Card.Title className='titulo-card'>{celular.title}</Card.Title>
              <Card.Text>
                {celular.originalPrice && celular.originalPrice !== celular.price && (
                  <span className="precio-original">{celular.originalPrice} USD</span>
                )}
                <span className="precio-descuento">{celular.price} USD</span>
              </Card.Text>
              <button className='btn btn-primary' onClick={() => addToCart(celular)}>Agregar al carrito</button>
              <button
                className='btn btn-primary'
                style={{ marginTop: '10px' }}
                onClick={() => toggleDesc(celular._id)}
              >
                {showDesc[celular._id] ? 'Ocultar información' : 'Más información'}
              </button>
              {/* Contenedor de descripción que se expande hacia abajo */}
              {showDesc[celular._id] && (
                <div className="descripcion-expandida" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                  <p>{celular.desc}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Celulares;






