import { Container } from './styles';

import logoGreen from '../../assets/logo-green.png';
import aboutMe from '../../assets/aboutMe.jpg'


export function AboutMe() {
  return (
    <Container id='sobre-mim'>
            <h1>sobre mim</h1>

            <div className="flex-wrapper">
                <img className='profile-pic' src={aboutMe} alt="Imagem de Juliana de Alencar com a mao no queixo e olhando para baixo" />

                <div className="about">
                    <p>Sou <span>psicóloga</span> formada pela Universidade Federal de
                        Santa Catarina (UFSC) e atuo na clínica desde 2019.
                    </p>
                    <p className='ident' >Atualmente (2024) estou ﬁnalizando meu mestrado
                        em Artes Cênicas na Universidade do Estado de Santa
                        Catarina (UDESC) e procuro exercer uma clínica
                        atravessada também pela <span>sensibilidade</span> e pela <span>poética </span>
                        que adquiri com o teatro.
                    </p>
                    <p className='ident' >Atuo na clínica com foco em <span>adolescentes</span>, <span>jovens</span> e 
                        <span> adultos</span>. Atualmente faço parte da equipe do Projeto
                        Saúde Mental Camarada (<a href="https://soberana.tv/#projects-hr" target="_blank" rel="noopener noreferrer">SAMECA</a>).
                    </p>
                </div>
            </div>

            <img className='logoGreen' src={logoGreen} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}