import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <nav>
        <Link onClick={() => scrollToSection('home')} className="home" to="/">início</Link>
        <Link onClick={() => scrollToSection('sobre-mim')} className="sobre-mim" to="/sobre-mim">sobre mim</Link>
        <Link onClick={() => scrollToSection('sobre-a-psicoterapia')} className="psicoterapia" to="/sobre-a-psicoterapia">sobre a psicoterapia</Link>
        <Link onClick={() => scrollToSection('faq')} className="home" to="/">perguntas frequentes</Link>
        <Link onClick={() => scrollToSection('contato')} className="contato" to="contato">contato</Link>
      </nav>
    </Container>
  );
}