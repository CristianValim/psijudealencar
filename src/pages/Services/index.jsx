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
            <h1>sobre a psicoterapia</h1>

            <div className="flex-wrapper">
                <ul>
                    <li>
                      <img src={icon1} alt="Icone de uma caneta tinteiro de pena na cor lilas" />
                      Clínica <br/> sensível e <br/> poética
                    </li>
                      
                    <li>
                      <img src={icon2} alt="Icone da letra grega Psi, simbolo internacional da psicologia." />
                      Psicoterapia <br/> com base no <br/> construcionismo <br/> social
                    </li>

                    <li>
                      <img src={icon3} alt="Icone de um rosto jovem." />   
                      Atendimento <br/> de adolescentes <br/> e adultos
                    </li>

                    <li>
                      <img src={icon4} alt="Icone de um monitor de computador com a tela em branco." />
                      Atendimento <br/> online e <br/> presencial
                    </li>
                    
                    <li>
                      <img src={icon5} alt="Icone de um coração com faixas nas cores branco, bege, verde e lilas." />
                      Experiência em <br/> atendimento <br/> com população <br/> LGBTQIA+
                    </li>
                </ul>
            </div>

            <img className='logoPurple' src={logoPurple} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}