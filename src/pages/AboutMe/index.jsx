import { Container } from './styles';
import logoGreen from '../../assets/logo-green.png';
import aboutMe from '../../assets/aboutMe.png';

export function AboutMe() {
  return (
    <Container id='sobre-mim'>
      <div className="flex-wrapper">
        <h1>sobre mim</h1>
        <img className='profile-pic' src={aboutMe} alt="Imagem de Juliana de Alencar com a mão no queixo e olhando para baixo" />
        <div className="about">
          <p>
            Olá! Meu nome é <span>Juliana Barbosa de Alencar</span> (CRP 12/20214) e sou <span>psicóloga</span> formada pela Universidade Federal de Santa Catarina (UFSC) e atuo como psicóloga clínica pela abordagem da <span>Sistêmica</span> e algumas influências da <span>Esquizoanálise</span>. Ofereço atendimento online e presencial para adolescentes, jovens e adultos.
          </p>
          <p className="ident">
            Sou <span>Mestre em Artes Cênicas</span> pela Universidade do Estado de Santa Catarina (UDESC) e procuro exercer uma clínica atravessada também pela <span>sensibilidade, poética, escuta afetiva, potente, sensível às vulnerabilidades</span>, e principalmente, baseada numa <span>psicologia ética</span>.
          </p>
        </div>
      </div>
      <img className='logo' src={logoGreen} alt="Logo Juliana de Alencar" />
    </Container>
  );
}
