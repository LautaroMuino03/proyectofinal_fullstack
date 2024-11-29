import Carousel from "react-bootstrap/Carousel";
import celPromo from "../../assets/promo-celulares.webp";
import purificadorPromo from "../../assets/promo-purificador.webp";
import "./Carousel.css";
import { Link } from "react-router-dom";

function Carrusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <Link to="/celulares">
        <img className="d-block w-100" src={celPromo} alt="First slide" />
      </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Purificadores">
        <img
          id="img"
          className="d-block w-100"
          src={purificadorPromo}
          alt="Second slide"
          />
          </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
