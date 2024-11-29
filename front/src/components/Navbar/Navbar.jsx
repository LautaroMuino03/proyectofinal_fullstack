import { useContext, useState } from 'react';
import { NavDropdown, Navbar, Container, Nav, Offcanvas, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../assets/OIG3.png';
import carro from '../../assets/carro.webp';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';

function Navegacion() {
  const { count, cartItems, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false); // Modal del carrito

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  return (
    <>
      <header className='encabezado'>
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand className="mx-auto">
              <div className="d-flex justify-content-center align-items-center">
                <img className='imagen' src={logo} alt="logo" />
                <h2 className='titulo'>TecnoHogar</h2>
              </div>
              <img className='carro' src={carro} alt="carro" onClick={handleCartShow} style={{ cursor: 'pointer' }} />
              <div className="cart-counter" onClick={handleCartShow} style={{ cursor: 'pointer' }}>
                {count}
              </div>
            </Navbar.Brand>
            <Navbar.Offcanvas 
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header className='hamburguer' closeButton>
                <Offcanvas.Title className='titulo' id="offcanvasNavbarLabel">TecnoHogar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='hamburguer'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='link-menu' to="./Inicio">
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                  </Link>
                  <Link className='link-menu' to="./Contacto">
                    <Nav.Link href="#action2">Contacto </Nav.Link>
                  </Link>
                  <NavDropdown title="Productos">
                    <Link className='link-menu' to="./Productos/Celulares">
                      <NavDropdown.Item href="#action3">Celulares</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Televisores">
                      <NavDropdown.Item href="#action4">Televisores</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Notebooks">
                      <NavDropdown.Item href="#action5">Notebooks</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Purificadores">
                      <NavDropdown.Item href="#action6">Purificadores</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  {/* Botón que redirige al formulario de login */}
                  <Link to="/login">
                    
                  </Link>
                </Nav>
                <Form className="d-flex"></Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>

      {/* Modal de Carrito */}
      <Modal show={showCart} onHide={handleCartClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="d-flex justify-content-between align-items-center">
                  <span>{item.title} - {item.price} USD</span>
                  <Button variant="dark" onClick={() => removeFromCart(item)}>Eliminar</Button>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => alert("Compra finalizada")}>Finalizar compra</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navegacion;



/*
import { useContext, useState } from 'react';
import { NavDropdown, Navbar, Container, Nav, Offcanvas, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../assets/OIG3.png';
import carro from '../../assets/carro.webp';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';

function Navegacion() {
  const { count, cartItems, removeFromCart } = useContext(CartContext); // el UseContext se utiliza para acceder a los valores del contexto han sido pasados.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); // función para cerrar la ventana correspondiente
  const handleShow = () => setShow(true); // funcion que permite mostrar una ventana 

  return (
    <>
      <header className='encabezado'>
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand className="mx-auto">
              <div className="d-flex justify-content-center align-items-center">
                <img className='imagen' src={logo} alt="logo" />
                <h2 className='titulo'>TecnoHogar</h2>
              </div>
              <img className='carro' src={carro} alt="carro" onClick={handleShow} style={{ cursor: 'pointer' }} />
              <div className="cart-counter" onClick={handleShow} style={{ cursor: 'pointer' }}>
                {count}
              </div>
              
            </Navbar.Brand>
            <Navbar.Offcanvas 
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header className='hamburguer' closeButton>
                <Offcanvas.Title className='titulo' id="offcanvasNavbarLabel">TecnoHogar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='hamburguer'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='link-menu' to="./Inicio">
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                  </Link>
                  <Link className='link-menu' to="./Contacto">
                    <Nav.Link href="#action2">Contacto </Nav.Link>
                  </Link>
                  <NavDropdown title="Productos">
                    <Link className='link-menu' to="./Productos/Celulares">
                      <NavDropdown.Item href="#action3">Celulares</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Televisores">
                      <NavDropdown.Item href="#action4">Televisores</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Notebooks">
                      <NavDropdown.Item href="#action5">Notebooks</NavDropdown.Item>
                    </Link>
                    <Link className='link-menu' to="./Productos/Purificadores">
                      <NavDropdown.Item href="#action6">Purificadores</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                // key={item.id} porque cada producto tiene su id unico para poder identificarlos
                <li key={index} className="d-flex justify-content-between align-items-center"> 
                  <span>{item.title} - {item.price} USD</span>
                  <Button variant="dark" onClick={() => removeFromCart(item)}>Eliminar</Button>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => alert("Compra finalizada")}>Finalizar compra</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navegacion;
*/

