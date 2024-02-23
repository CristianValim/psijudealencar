import { Container } from './styles';

import logoPurple from '../../assets/logo-purple.png';
import { FaWhatsapp } from "react-icons/fa";

export function Home() {
  return (
    <Container id='home'>
      <div className="banner top"></div>
 
          <div className="flex-wrapper">
            <img src={logoPurple} alt="Logo Juliana de Alencar" /> 
            <button><a href="https://wa.me/5548998468897" target='_blank' rel="noopener noreferrer"><FaWhatsapp size="2.5rem"/>agende uma sessão</a></button>
          </div>

          <p>Deixe tudo acontecer a você <br/>
                Beleza e terror <br/>
                Apenas continue <br/>
                Nenhum sentimento é final <br/> <br/>
               <span>Rainer Maria Rilke</span></p>

               <div className="banner bottom"></div>
    </Container>
  );
}