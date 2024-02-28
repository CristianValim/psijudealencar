import { Container } from './styles';

import logoPurple from '../../assets/logo-purple.png';

import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import icon4 from '../../assets/icon-4.png';
import icon5 from '../../assets/icon-5.png';

export function Services() {
  return (
    <Container id='sobre-a-psicoterapia'>
            <h1 className='title'>sobre a psicoterapia</h1>

            <div className="flex-wrapper">
                    <figure>
                      <img src={icon1} alt="Icone de uma caneta tinteiro de pena na cor lilas" />
                      <figcaption>Clínica <br/> sensível e poética</figcaption>
                    </figure>
                      
                    <figure>
                      <img src={icon2} alt="Icone da letra grega Psi, simbolo internacional da psicologia." />
                      <figcaption>Psicoterapia  com base no  construcionismo  social</figcaption>
                    </figure>

                    <figure>
                      <img src={icon3} alt="Icone de um rosto jovem." />   
                      <figcaption>Atendimento de adolescentes <br /> e adultos</figcaption>
                    </figure>

                    <figure>
                      <img src={icon4} alt="Icone de um monitor de computador com a tela em branco." />
                      <figcaption>Atendimento online e presencial</figcaption>
                    </figure>
                    
                    <figure>
                      <img src={icon5} alt="Icone de um coração com faixas nas cores branco, bege, verde e lilas." />
                      <figcaption>Experiência em  atendimento com população LGBTQIA+</figcaption>
                    </figure>
            </div>

            <img className='logo' src={logoPurple} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}