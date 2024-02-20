import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.CREAM};
    display: grid;
    place-content: center;

    .banner {
        height: 5vh;
        position: absolute;
        width: 100%;
        z-index: 5;
        background-color: #FFF;
    }

    .top {
        top: 5vh;
    }

    .bottom {
        bottom: 0;
    }

    .flex-wrapper {
        display: grid;
        place-items: center;
        gap: 5rem;

        img {
            max-width: 50%;
        }
    }

    .flex-wrapper button {
        font-size: 1.4rem;
        background: #FFF;
        padding: 1rem 3rem;
        border-radius: 10rem;
        
        a {
            display: flex;
            gap: 3rem;
            align-items: center;
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
`