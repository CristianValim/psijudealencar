import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileHeader, setIsMobileHeader] = useState(true);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileHeader(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <nav className={isMobileHeader ? "mobile" : "desktop"}>
        <Link onClick={() => scrollToSection('home')} className="home" to="/">Início</Link>
        <Link onClick={() => scrollToSection('sobre-mim')} className="sobre-mim" to="/sobre-mim">Sobre Mim</Link>
        <Link onClick={() => scrollToSection('sobre-a-psicoterapia')} className="psicoterapia" to="/sobre-a-psicoterapia">
          {isMobileHeader ? "Psicoterapia" : "Sobre a Psicoterapia"}
        </Link>
        <Link onClick={() => scrollToSection('faq')} className="faq" to="/">{isMobileHeader ? "FAQ" : "Perguntas Frequentes"}</Link>
        <Link onClick={() => scrollToSection('contato')} className="contato" to="/contato">Contato</Link>
      </nav>
    </Container>
  );
}
