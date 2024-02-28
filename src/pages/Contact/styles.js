import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.PURPLE};
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    position: relative;
    height: 100vh;
    padding-inline: 10%;
    display: grid;
    place-content: center;
    gap: 3rem;

    .flex-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .instalogo {
            font-size: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        span {
            font-size: 1.8rem;
        }

        button {
            background: #FFF;
            padding: 1rem;
            border-radius: 10rem;
            width: 100%;
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            a {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .wpplogo {
                font-size: 3rem;
            }
        }
    }

    .maps {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        h1 {
            font-size: 1.8rem;
            font-weight: 600;
            background: #FFF;
            border-radius: 10rem;
            min-width: 100%;
            padding: 1.5rem 3rem;

            span {
                line-height: 2.5rem;
                font-size: 1.6rem;
                font-weight: 400;
            }
        }

        iframe {
            min-height: 30rem;
            border-radius: 4rem;
            border-style: none;
            min-width: 100%;
            height: 100%;
        }
    }

    /* Desktop */
    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20%;

        .flex-wrapper {
            display: grid;
            place-items: center;
            align-content: space-between;
            grid-template-columns: repeat(2, 1fr);

            .instalogo {
                font-size: 7rem;
                flex-direction: column;
            }

            .logoGreen {
                max-width: 20rem;
            }

            button {
                width: 80%;
                grid-column: span 2;
                font-size: 3rem;
                padding: 2rem;

                a {
                    gap: 3rem;
                }

                .wpplogo {
                    font-size: 5rem;
                }
            }
        }

        .maps {
            h1 {
                padding: 1.5rem 5rem;
            }

            iframe {
                min-height: 35rem;
            }
        }
    }
`;
