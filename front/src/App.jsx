import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import Celulares from './components/Productos/Celulares/Celulares';
import Televisores from './components/Productos/Televisores/Televisores';
import Notebooks from './components/Productos/Notebooks/Notebooks';
import Purificadores from './components/Productos/Purificadores/Purificadores';
import { Carousel } from 'react-bootstrap';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './components/CartContext/CartContext';
import AdminPanel from './components/panelAdministracion/adminPanel';
import LoginForm from './components/loginForm/loginForm';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router basename='/proyectofinal_UTN'>
      <CartProvider>
        <div className='app-container'>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Productos/celulares" element={<Celulares />} />
              <Route path="/Productos/televisores" element={<Televisores />} />
              <Route path="/Productos/notebooks" element={<Notebooks />} />
              <Route path="/Productos/purificadores" element={<Purificadores />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Inicio />} />
              <Route path="/" element={<Carousel />} />
              <Route path="/adminPanel" element={<PrivateRoute element={<AdminPanel />} />} />
              <Route path="/celulares" element={<Celulares />} />
              <Route path="/purificadores" element={<Purificadores />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;


