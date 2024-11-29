import { Link } from 'react-router-dom';
import './Footer.css';


function Footer(){
    return (
        <footer id="footer" className="py-0 my-0">
            <div className='footer'> 
            <ul className="nav justify-content-center pb-3 mb-3">
                <Link to="./Inicio" className='link-menu'>
                <li className="nav-item"><a href="#" className="nav-link px-2">Inicio</a></li>
                </Link>
                <Link to="./Contacto" className='link-menu'>
                <li className="nav-item"><a href="#" className="nav-link px-2">Contacto</a></li>
                </Link>
            </ul>
            <p className="text-center">© Derechos reservados, TecnoHogar.</p>
            </div>
        </footer>
    );
}


export default Footer;