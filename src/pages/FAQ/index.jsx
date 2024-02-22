import { Container } from './styles';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import logoBlack from '../../assets/logo-black.png';
import { useState } from 'react';

export function FAQ() {
  const [ expandedIndex, setExpandedIndex ] = useState(false);

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index)
  };

  const questions = [
    {
      question: 'A Psicoterapia é mais do que “conversar”?',
      answer: `Algumas pessoas costumam perguntar “Por que a psicoterapia pode me ajudar? Sempre falo dos meus problemas com amigos, e falar não muda nada”. É muito bom termos amigos que estão disponíveis para nós e prontos para nos escutar. Mas se conversar com os amigos não resolve o seu problema, pode ser que o tipo de conversa que acontece seja apenas isso: “conversa”.
      Ao contrário, a natureza da “conversa” que acontece no contexto da psicoterapia está ligada em um processo mais profundo de autoconhecimento e mudança pessoal. Conversar é apenas “a ponta do iceberg” onde ocorre o processo mais profundo. A “fala” ou “conversa” é apenas um componente óbvio do processo, ocorrendo muito mais que isso ao nível cognitivo e emocional.
      Apesar da troca de palavras ocorrida entre cliente e psicóloga possa parecer a forma mais óbvia de comunicação, na realidade a terapia pode oferecer uma experiência muito mais rica do que uma mera troca de palavras e conselhos.
      Porque ao falar, nos escutamos, e temos a oportunidade de ressignificar o que aconteceu. É como se ao mudarmos nossa forma de pensar e enxergar o mundo, temos a oportunidade de viver de uma forma diferente.
      Os pensamentos e sentimentos partilhados pela cliente e as técnicas utilizadas pela psicóloga são, contudo, muito menos importantes do que a relação terapêutica construída entre a dupla. A relação estabelecida com a terapeuta é essencial para a eficácia do processo, por isso é muito importante que o cliente encontre uma profissional com a qual consiga estabelecer uma relação segura, com confiança e confortável, uma profissional que a faça sentir-se ouvida e compreendida.`
    },
    {
      question: 'Em primeiro lugar, o que é psicoterapia?',
      answer: `A psicoterapia é um processo onde se analisa e busca a melhoria de sofrimentos psicológicos, redução de angústias, resolução de condições emocionais relacionadas a eventos passados, desconfortos cotidianos, dúvidas e questionamentos sobre si mesmo e sua vida.
      Pode-se colocar, de maneira geral, que o objetivo final da psicoterapia é permitir que o indivíduo possa se desenvolver para conseguir viver harmonicamente no seu meio e consigo.
      `
    },
    {
      question: 'Quem pode ou deve fazer sessões com uma psicóloga?',
      answer: `Indo direto ao ponto: não é “coisa de gente louca” e qualquer pessoa pode fazê-la. Essa associação à loucura se deve muito às origens históricas da psicologia como profissão, principalmente pela forte relação com os tratamentos em hospitais psiquiátricos durante o século passado aqui no Brasil.
      Hoje o cenário é muito diferente, mas essa imagem ainda preconcebida ainda permanece em boa parte da população. Ainda hoje se realizam atendimentos a casos bastante delicados (ex: psicoses, transtornos dissociativos, de personalidade, entre outros) em hospitais e clínicas, mas a atuação do psicólogo é muito mais abrangente. Eu coloquei propositalmente “sessões com um psicólogo” porque os atendimentos não se resumem a trabalhar sobre os transtornos psicológicos.
      Qualquer pessoa pode recorrer a esse atendimento independente de idade, crenças, capacidades cognitivas, tipo de problemas ou situações pelas quais está passando.
      `
    },
    {
      question: 'Quantos tipos de psicoterapia existem?',
      answer: `Tantas quantos psicoterapeutas existentes. É verdade que existe um número limitado de abordagens teóricas - e ainda são diversas! - mas cada processo psicoterapêutico depende da formação do psicólogo, da sua experiência pessoal e profissional, e principalmente, da capacidade em estabelecer um vínculo de confiança com a paciente.
      Podemos pensar nas abordagens teóricas como eixos de referência para cada tipo de psicoterapia (ex. psicanálise freudiana, psicanálise lacaniana, terapia analítico-comportamental, terapia cognitiva, terapia sistêmica, psicodrama, gestalt terapia, terapia centrada na pessoa, histórico-dialética, etc.), mas onde cada relação terapêutica se tornará única por envolver uma terapeuta [com sua formação e leitura própria sobre cada caso] atendendo um paciente com sua história de vida também única e individual.
      Algo importante de ressaltar, é que apesar das disputas teóricas entre abordagens, não há diferenças significativas de desfecho quando são comparadas entre si. Em outras palavras, em termos de resultados, as teorias possivelmente importam bem menos do que gostamos de acreditar. A eficácia da terapia tem muito mais a ver com a capacidade da psicoterapeuta em formar e manter vínculos com diferentes pessoas, se mostrarem empáticos e de se envolver e estudar sobre terapia para além do momento da clínica.
      `
    }
  ]
  return (
    <Container id='faq'>
            <h1>perguntas frequentes</h1>

            <div className="flex-wrapper">
                <ul>
                  {questions.map((question, index) => (
                    <li key={index}>
                      <div className="question" onClick={() => toggleExpanded(index)}>
                        <span>{question.question}</span>
                        <button className='plus' onClick={() => toggleExpanded(index)}><AiOutlinePlus size="2rem"/></button>
                      </div>
                      {expandedIndex === index && 
                      <div className="answer-overlay">
                        <div className='answer' >{question.answer}
                        <button className='minus' onClick={() => toggleExpanded(index)}>
                           <AiOutlineMinus size="2rem"/>
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