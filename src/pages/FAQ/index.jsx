import { Container } from './styles';
import { AiOutlinePlus } from "react-icons/ai";

import logoBlack from '../../assets/logo-black.png';

export function FAQ() {
  return (
    <Container id='faq'>
            <h1>perguntas frequentes</h1>

            <div className="flex-wrapper">
                <ul>
                    <li>Em primeiro lugar, o que é a psicoterapia? <button><AiOutlinePlus size="2rem" /></button></li>
                    <li>A psicoterapia é mais do que “conversar”? <button><AiOutlinePlus size="2rem"/></button></li>
                    <li>Quem pode ou deve fazer sessões com uma psicóloga? <button><AiOutlinePlus size="2rem"/></button></li>
                    <li>Quantos tipos de psicoterapia existem? <button><AiOutlinePlus size="2rem"/></button></li>
                </ul>

              <p>Peço-lhe, tanto quanto puder, caro senhor, que seja paciente com
                tudo o que não esteja resolvido em seu coração e tente ter amor pelas
                próprias perguntas, como se fossem quartos trancados ou livros
                escritos em uma língua estrangeira. Não busque agora as respostas
                que não lhe podem ser dadas, porque não poderia vivê-las.<br/>
                E é disso que se trata, de viver tudo.<br/>
                Viva agora as perguntas.<br/>
                Talvez, então, gradativamente, sem notar, em algum dia distante,
                você venha viver nas respostas.
                <br/>
                <br/>
                <span>Rainer Maria Rilke, em Cartas a um Jovem Poeta</span>
              </p>
            </div>

            <img className='logoWhite' src={logoBlack} alt="Logo Juliana de Alencar" /> 
    </Container>
  );
}