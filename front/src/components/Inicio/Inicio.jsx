import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import celulares from '../../assets/celulares.webp'
import televisores from '../../assets/televisores.webp'
import notebooks from '../../assets/notebooks.webp'
import purificador from '../../assets/Purificador.jpg'
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import './Inicio.css'

const Inicio = () => {
  return (
    <div>
      
          <Carousel /> 
     <Container className='imagenes'>
      <Row className='clase-inicio'>
        <Col xs={5} md={3}>
        <Link className='link' to="./Productos/Celulares" >
          <Image className='img bg-light' src={celulares} rounded />
          <h5 className='h5'> Celulares</ h5>
        </Link>

        </Col>
        <Col xs={5} md={3} >
        <Link className='link' to="./Productos/Televisores" >
        
          <Image className='img bg-light' src={televisores} rounded />
          <h5 className='h5'> Televisores</ h5>
        </Link>
        </Col>
        <Col xs={5} md={3}>
        <Link className='link' to="./Productos/Notebooks" >
          <Image className='img bg-light' src={notebooks} rounded />
          <h5 className='h5'> Notebooks</ h5>
        </Link>
        </Col>
        <Col xs={5} md={3}>
        <Link className='link' to="./Productos/Purificadores" >
          <Image className='img bg-light' src={purificador} rounded />
          <h5 className='h5'>Purificador</ h5>
        </Link>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Inicio;