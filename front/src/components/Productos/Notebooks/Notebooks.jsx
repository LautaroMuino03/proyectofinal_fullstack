import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Notebooks.css';
import CartContext from '../../CartContext/CartContext';
import useProductos from '../../listaProductos/listaProductos';

function Notebooks() {
  const { addToCart } = useContext(CartContext);
  const { productos, loading } = useProductos();

  const [showDesc, setShowDesc] = useState({});

  if (loading) return <p>Cargando productos...</p>;

  const notebooks = productos.filter((producto) => producto.category === 'notebooks');

  const toggleDesc = (id) => {
    setShowDesc((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      <div className='padre-cartas'>
        {notebooks.map((notebook) => (
          <Card key={notebook._id} className='carta' style={{ width: '18rem', marginBottom: '1rem' }}>
             <Card.Img variant="top" src={`http://localhost:3001${notebook.img}`} alt={notebook.title} />
            <Card.Body>
              <Card.Title className='titulo-card'>{notebook.title}</Card.Title>
              <Card.Text>
                <span className="precio">{notebook.price} USD</span>
              </Card.Text>
              <button className='btn btn-primary' onClick={() => addToCart(notebook)}>Agregar al carrito</button>
              <button
                className='btn btn-primary'
                style={{ marginTop: '10px' }}
                onClick={() => toggleDesc(notebook._id)}
              >
                {showDesc[notebook._id] ? 'Ocultar información' : 'Más información'}
              </button>
              {showDesc[notebook._id] && (
                <div className="descripcion-expandida" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                  <p>{notebook.desc}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Notebooks;

