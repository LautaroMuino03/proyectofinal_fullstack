import "./Contacto.css";
import whatsapp from "../../assets/whatsapp.png";
import telefono from "../../assets/telefono.webp";
import mail from "../../assets/mail.webp";

function Contacto() {
  return (
    <div className="clase-padre"> 
    <div className="contacto">
      <ul>
        <li>
          <a href="cel:541122457824">
            <img className="imagenes-contacto" src={whatsapp} alt="" />
            +541122457824
          </a>
        </li>
        <li>
          <a href="">
            <img className="imagenes-contacto" src={telefono} alt="" />
            +54301891
          </a>
        </li>
        <li>
          <a href="mailto:Tecnoaltoavellaneda@gmail.com">
            <img className="imagenes-contacto" src={mail} alt="" />
            Tecnoaltoavellaneda@gmail.com
          </a>
        </li>
      </ul>
      
      <iframe className="mapa"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.177322603514!2d-58.37003192338949!3d-34.67547386129274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33334248ec25d%3A0x438c219aee66c1bb!2sAlto%20Avellaneda%20Shopping!5e0!3m2!1ses-419!2sar!4v1722020188545!5m2!1ses-419!2sar"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

 </div>
 </div>
  );
}

export default Contacto;
