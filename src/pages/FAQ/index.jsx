import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Container } from './styles';

import logoBlack from '../../assets/logo-black.png';
import { questions } from './questions';

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const closeAnswer = () => {
    setExpandedIndex(null);
  };
  
  return (
    <Container id='faq'>
      <h1>perguntas frequentes</h1>
      <div className="flex-wrapper">
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <div className="question">
                <span>{question.question}</span>
                <button className='plus' onClick={() => toggleExpanded(index)}><AiOutlinePlus size="2rem" /></button>
              </div>
              {expandedIndex === index &&
                <div className="answer-overlay">
                  <div className={expandedIndex !== null ? 'answer open' : 'answer closed'} >
                    <div className='text'>
                      {question.answer}
                    </div>

                    <button className='minus' onClick={closeAnswer}>
                      <IoClose size="3rem" />
                    </button>
                  </div>
                </div>}
            </li>
          ))}
        </ul>

        <p>Peço-lhe, tanto quanto puder, caro senhor, que seja paciente com
          tudo o que não esteja resolvido em seu coração e tente ter amor pelas
          próprias perguntas, como se fossem quartos trancados ou livros
          escritos em uma língua estrangeira. Não busque agora as respostas
          que não lhe podem ser dadas, porque não poderia vivê-las.<br />
          E é disso que se trata, de viver tudo.<br />
          Viva agora as perguntas.<br />
          Talvez, então, gradativamente, sem notar, em algum dia distante,
          você venha viver nas respostas.
          <br />
          <br />
          <span>Rainer Maria Rilke, em Cartas a um Jovem Poeta</span>
        </p>
      </div>

      <img className='logoWhite' src={logoBlack} alt="Logo Juliana de Alencar" />
    </Container>
  );
}
