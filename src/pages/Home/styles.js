import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.CREAM};
    display: grid;
    place-content: center;

    .banner {
        position: absolute;
        width: 100%;
        z-index: 5;
        background-color: #FFF;
    }

    .top {
        height: 12vh;
        top: 0;
    }

    .bottom {
        height: 7vh;
        bottom: 0;
    }

    .flex-wrapper {
        display: grid;
        place-items: center;
        gap: 5rem;

        img {
            max-width: 50%; /* Alterado para 50% como padrão */
        }
    }

    .flex-wrapper button {
        width: 65%; /* Alterado para 65% como padrão */
        font-size: 1.4rem;
        background: #FFF;
        padding: 1rem 3rem;
        border-radius: 10rem;
        
        a {
            display: flex;
            gap: 1rem; /* Alterado para 1rem como padrão */
            align-items: center;
            justify-content: center;
        }
    }

    p {
        position: absolute;
        bottom: 10%;
        right: 5%;
        text-align: end;
        font-weight: 300;
        font-style: italic;
        font-size: 1.4rem;
        line-height: 2.1rem;

        span {
            font-weight: 400;
            font-style: normal;
        }
    }

    /* Desktop */
    @media (min-width: 600px) {
        .flex-wrapper img {
            max-width: 40%; /* Redefinido para 40% dentro da media query para desktop */
        }

        .flex-wrapper button {
            width: 20%; /* Redefinido para 20% dentro da media query para desktop */
            font-size: 1.6rem; /* Redefinido para 1.6rem dentro da media query para desktop */
            
            a {
                gap: 3rem; /* Redefinido para 3rem dentro da media query para desktop */
            }
        }
    }
`;
