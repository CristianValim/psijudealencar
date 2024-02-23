import styled, { keyframes } from "styled-components";

const scaleUpCenter = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
    height: 100vh;
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
        
        max-width: 17rem;
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
        position: fixed;
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
        font-size: clamp(1.2rem, calc(1rem + 1vw), 1.8rem);

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
        max-width: 80%;
        max-height: 80%;
        z-index: 1001;
        

        &.open {
            animation: ${scaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        h1 {
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.PURPLE};
            font-weight: 400;
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

    @media (max-width: 600px) {
        
        .text {
            overflow-y: scroll;
            max-height: 50rem;
            margin-top: 2rem;
            h1 {
                background: #FFF;
                margin-right: 3rem;
            }
        }

        h1 {
            position: absolute;
            top: 3rem;
            max-width: 25rem;
        }
        
        .flex-wrapper {
            display: flex;
            flex-wrap: wrap;

            ul {
                padding-bottom: 3rem;
            }
        }

        .flex-wrapper ul {
            margin-inline: auto;
        }


        .logoWhite {
            max-width: 30%;
        }
    }
`