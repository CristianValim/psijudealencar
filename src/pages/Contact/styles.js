import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};

    padding-inline: 10%;
    height: 100svh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.PURPLE};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flex-wrapper {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);

        .instalogo {
            font-size: 9rem;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        span {
            font-size: 1.8rem;
        }
        
        .logoGreen {
            max-width: 25rem;
        }
        
        button {
            margin-top: 5rem;
            grid-column: span 2;
            font-size: 3.5rem;

            background: #FFF;
            padding: 1.5rem;
            border-radius: 3rem;
            width: 50rem;
        
        a {
            display: flex;
            gap: 3rem;
            align-items: center;
            justify-content: center;
        }
    }
}

.maps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        background: #FFF;
        border-radius: 3rem;
        min-width: 60rem;
        padding: 2rem;

        span {
            line-height: 2.5rem;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    iframe {
        border-radius: 4rem;
        border-style: none;
        min-height: 33rem;
        min-width: 60rem;
    }
}


`