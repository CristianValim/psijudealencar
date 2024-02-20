import styled from "styled-components";

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
        bottom: -1rem;
        right: -1rem;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        background: ${({ theme }) => theme.COLORS.GREEN};
        box-shadow: .3rem .3rem .5rem rgba(0, 0, 0, 0.4);
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
`