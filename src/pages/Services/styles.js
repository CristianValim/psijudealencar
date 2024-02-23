import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.GREEN};

    padding-inline: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
        color: ${({ theme }) => theme.COLORS.CREAM};
        font-size: clamp(3.2rem, calc(2rem + 2vw), 5rem);
        font-weight: bold;

        margin-bottom: 10%;
    }
    
    .flex-wrapper ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        line-height: 1.5;
        font-size: 1.4rem;

        li {
            margin-bottom: 2rem;
        }
        img {
            display: block;
            margin-inline: auto;
            margin-bottom: 1rem;
            max-width: 8rem;
        }
    }

    .logoPurple {
        max-width: 30%;
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

    @media (max-width: 600px) {
        h1 {
            position: absolute;
            top: 3rem;
            max-width: 21rem;
        }

        .flex-wrapper ul {
            flex-wrap: wrap;
        }
    }

    @media (min-width: 600px) {
        .logoPurple {
            max-width: 15%;
        }
    }
`