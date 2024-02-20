import { Container } from './styles';

import logoPurple from '../../assets/logo-purple.png';

export function Services() {
  return (
    <Container id='sobre-a-psicoterapia'>
            <h1>sobre a psicoterapia</h1>

            <div className="flex-wrapper">
                <ul>
                    <li>Clínica <br/> sensível e <br/> poética</li>
                    <li>Psicoterapia <br/> com base no <br/> construcionismo <br/> social</li>
                    <li>Atendimento <br/> de adolescentes <br/> e adultos</li>
                    <li>Atendimento <br/> online e <br/> presencial</li>
                    <li>Experiência em <br/> atendimento <br/> com população <br/> LGBTQIA+</li>
                </ul>
            </div>

            <img className='logoPurple' src={logoPurple} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}