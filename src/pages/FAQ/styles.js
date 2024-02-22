import styled, { keyframes } from "styled-components";

const scaleUpCenter = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const scaleDownCenter = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
`;

export const Container = styled.div`
    height: 100svh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.CREAM};

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 10%;

    h1 {
        font-family: ${({ theme }) => theme.FONTS.INNER_FONT};
        color: ${({ theme }) => theme.COLORS.GREEN};
        font-size: clamp(3.2rem, calc(2rem + 2vw), 5rem);
        font-weight: bold;

        margin-bottom: 5%;
    }
    
    .flex-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10%;
    }

    .flex-wrapper ul {
        width: max-content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: auto;
        gap: 3rem;
    }

    .flex-wrapper ul li {
        position: relative;
        display: grid;
        place-content: center;
        text-align: center;
        font-size: clamp(1.2rem, calc(1rem + 1vw), 1.4rem);
        line-height: 2.2rem;
        
        width: 17rem;
        height: 12rem;
        border-radius: 3rem;
        padding: 2rem;
        
        background: #FFF;
        box-shadow: .3rem .3rem .5rem rgba(0, 0, 0, 0.4);
    }

    button {
        display: grid;
        place-content: center;
        position: absolute;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        background: ${({ theme }) => theme.COLORS.GREEN};
        box-shadow: .3rem .3rem .5rem rgba(0, 0, 0, 0.4);
    }

    .plus {
        bottom: -1rem;
        right: -1rem;
    }

    .minus {
        top: -2rem;
        right: -2rem;
        width: 7rem;
        height: 7rem;
    }

    .flex-wrapper p {
        max-width: 50rem;
        text-align: end;
        font-weight: 300;
        font-style: italic;
        font-size: clamp(1.4rem, calc(1rem + 1vw), 1.8rem);
        line-height: 2.1rem;

        span {
            font-weight: 400;
            font-style: normal;
        }
    }

    .logoWhite {
        max-width: 15%;
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

    .answer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5); /* Adiciona um fundo escuro semi-transparente */
        z-index: 1000; /* Certifique-se de que a caixa de resposta esteja acima de outros elementos */
    }

    .answer {
        position: relative;
        padding: 5rem 7rem;
        background: #FFF;
        border-radius: 5rem;
        text-align: start;
        max-width: 80%; /* Define a largura máxima da caixa de resposta */
        z-index: 1001; /* Garante que a caixa de resposta esteja acima da camada de fundo */
    
        &.open {
            animation: ${scaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        &.closed {
            animation: ${scaleDownCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        h1 {
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.PURPLE};
            font-weight: 400;
        }

        .text {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5%;
        }

        .text p{
            font-size: 1.6rem;
            text-align: start;
            font-style: normal;
            font-weight: 400;

            margin-bottom: 2rem;
        }

        .row-start {
            grid-row-start: 1;
        }

        .row-end {
            grid-row-end: 2;
        }
    }
`