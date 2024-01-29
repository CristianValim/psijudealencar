import { Container } from './styles';

import logoPurple from '../../assets/logo-purple.png';
import { FaWhatsapp } from "react-icons/fa";

export function Home() {
  return (
    <Container id='home'>
            <img src={logoPurple} alt="Logo Juliana de Alencar" /> 
            <button><a href="https://wa.me/5548998468897" target='_blank' rel="noopener noreferrer"><FaWhatsapp size="2.5rem"/>agende uma sessão</a></button>
    </Container>
  );
}