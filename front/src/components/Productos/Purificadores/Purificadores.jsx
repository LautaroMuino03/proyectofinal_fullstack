import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Purificadores.css';
import CartContext from '../../CartContext/CartContext';
import useProductos from '../../listaProductos/listaProductos';

function Purificadores() {
  const { addToCart } = useContext(CartContext);
  const { productos, loading } = useProductos();

  const [showDesc, setShowDesc] = useState({});

  if (loading) return <p>Cargando productos...</p>;

  const purificadores = productos.filter((producto) => producto.category === 'purificadores');

  const toggleDesc = (id) => {
    setShowDesc((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      <div className='padre-cartas'>
        {purificadores.map((purificador) => (
          <Card key={purificador._id} className='carta' style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={`http://localhost:3001${purificador.img}`} alt={purificador.title} />
            <Card.Body>
              <Card.Title className='titulo-card'>{purificador.title}</Card.Title>
              <Card.Text>
                <span className="precio">{purificador.price} USD</span>
              </Card.Text>
              <button className='btn btn-primary' onClick={() => addToCart(purificador)}>Agregar al carrito</button>
              <button
                className='btn btn-primary'
                style={{ marginTop: '10px' }}
                onClick={() => toggleDesc(purificador._id)}
              >
                {showDesc[purificador._id] ? 'Ocultar información' : 'Más información'}
              </button>
              {showDesc[purificador._id] && (
                <div className="descripcion-expandida" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                  <p>{purificador.desc}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Purificadores;
