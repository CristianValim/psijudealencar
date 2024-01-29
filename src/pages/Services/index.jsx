import { Container } from './styles';

import logoPurple from '../../assets/logo-purple.png';

export function Services() {
  return (
    <Container id='sobre-a-psicoterapia'>
            <h1>sobre a psicoterapia</h1>

            <div className="flex-wrapper">
                <ul>
                    <li>clínica <br/> sensível e <br/> poética</li>
                    <li>psicoterapia <br/> com base no construcionismo <br/> social</li>
                    <li>atendimento <br/> de crianças, adolescentes <br/> e adultos</li>
                    <li>atendimento <br/> online e <br/> presencial</li>
                </ul>
            </div>

            <img className='logoPurple' src={logoPurple} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}