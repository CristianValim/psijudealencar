import { Container } from './styles';
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from 'react';
import logoPurple from '../../assets/logo-purple.png';
import logoPurpleSquare from '../../assets/logo-purple-square.png';

export function Home() {
  const [isMobileLogo, setIsMobileLogo] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileLogo(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container id='home'>
      <div className="banner top"></div>
      <div className="flex-wrapper">
        <img src={isMobileLogo ? logoPurpleSquare : logoPurple} alt="Logo Juliana de Alencar" />
        <button>
          <a href="https://wa.me/5548998468897" target='_blank' rel="noopener noreferrer">
            <FaWhatsapp size='3rem'/>agende uma sessão
          </a>
        </button>
      </div>
      <p>
        Deixe tudo acontecer a você <br/>
        Beleza e terror <br/>
        Apenas continue <br/>
        Nenhum sentimento é final <br/><br/>
        <span>Rainer Maria Rilke</span>
      </p>
      <div className="banner bottom"></div>
    </Container>
  );
}
