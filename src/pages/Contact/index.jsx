import { Container } from './styles';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logoGreen from '../../assets/logo-green-square.png';

export function Contact() {
  return (
    <Container id='contato'>
            <div className="flex-wrapper">
              <img className='logoGreen' src={logoGreen} alt="Logo Juliana de Alencar" /> 
              <Link className="instalogo" to="https://instagram.com/psi.judealencar" target='_blank'><FaInstagram /> <span>@psi.judealencar</span></Link>
              <button><Link to="https://wa.me/5548998468897" target='_blank' rel="noopener noreferrer"><FaWhatsapp size="5rem"/> agende uma sessão</Link></button>
            </div>

            <div className="maps">
              <h1>Madison Center<br/>
              <span>R. Des. Vítor Lima, 260 - Trindade, Florianópolis - SC</span></h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.89614633986!2d-48.52493182361805!3d-27.596749222133255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273854425e9a11%3A0x2d9abdd871aa875d!2sR.%20Des.%20V%C3%ADtor%20Lima%2C%20260%20-%20Trindade%2C%20Florian%C3%B3polis%20-%20SC%2C%2088040-401%2C%20Brasil!5e0!3m2!1spt-BR!2spt!4v1706550343664!5m2!1spt-BR!2spt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </Container>
  );
}