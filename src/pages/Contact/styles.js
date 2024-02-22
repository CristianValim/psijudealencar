import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.PURPLE};
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};

    position: relative;
    height: 100svh;
    padding-inline: 10%;
    display: grid;
    place-content: center;

    .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-bottom: 5rem;
        .instalogo {
            font-size: 5rem;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        span {
            font-size: 1.8rem;
        }
        
        .logoGreen {
            max-width: 15rem;
        }
        
        button {
            background: #FFF;
            padding: 1.5rem;
            border-radius: 10rem;
            width: 100%;
            font-size: 1.6rem;

        a {
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
        }
    }
}

.maps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        background: #FFF;
        border-radius: 3rem;
        min-width: 100%;
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
        min-width: 100%;
        min-height: 25rem;
    }
}

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-content: center;
        gap: 10%;

        .flex-wrapper {
            display: grid;
            place-items: center;
            grid-template-columns: repeat(2, 1fr);

            .instalogo {
                font-size: 9rem;
                flex-direction: column;
            }

            .logoGreen {
                max-width: 25rem;
            }

            button {
            margin-top: 5rem;
            grid-column: span 2;
            font-size: 2.5rem;

            a {
                gap: 3rem;
            }
        }
        }

        .maps {
            iframe {
            min-height: 37rem;
        }
        }
    }
`