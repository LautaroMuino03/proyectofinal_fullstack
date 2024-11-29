import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Televisores.css';
import CartContext from '../../CartContext/CartContext';
import useProductos from '../../listaProductos/listaProductos';

function Televisores() {
  const { addToCart } = useContext(CartContext);
  const { productos, loading } = useProductos();

  const [showDesc, setShowDesc] = useState({});

  if (loading) return <p>Cargando productos...</p>;

  const televisores = productos.filter((producto) => producto.category === 'televisores');

  const toggleDesc = (id) => {
    setShowDesc((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      <div className='padre-cartas'>
        {televisores.map((televisor) => (
          <Card key={televisor._id} className='carta' style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={`http://localhost:3001${televisor.img}`} alt={televisor.title} />
            <Card.Body>
              <Card.Title className='titulo-card'>{televisor.title}</Card.Title>
              <Card.Text>
                <span className="precio">{televisor.price} USD</span>
              </Card.Text>
              <button className='btn btn-primary' onClick={() => addToCart(televisor)}>Agregar al carrito</button>
              <button
                className='btn btn-primary'
                style={{ marginTop: '10px' }}
                onClick={() => toggleDesc(televisor._id)}
              >
                {showDesc[televisor._id] ? 'Ocultar información' : 'Más información'}
              </button>
              {showDesc[televisor._id] && (
                <div className="descripcion-expandida" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                  <p>{televisor.desc}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Televisores;

