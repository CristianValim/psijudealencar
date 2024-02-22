import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: clamp(1.4rem, calc(1rem + 1vw), 1.8rem);
    height: 100vh;
    padding-inline: 10%;
    line-height: 1.5;

    display: grid;
    place-content: center;

    position: relative;
    background: ${({ theme }) => theme.COLORS.GREY};

    text-align: justify;

    h1 {
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-size: clamp(3.2rem, calc(2rem + 2vw), 5rem);
        font-weight: bold;
    }
   
    .profile-pic {
        margin-bottom: 5rem;
        object-fit: cover;
        border-radius: 8rem;
        box-shadow: .7rem .7rem .5rem rgba(0, 0, 0, 0.4);
    }

    .logoGreen {
        max-width: 30%;
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

    @media (max-width: 600px) {
       h1 {
           position: absolute;
           top: 3rem;
       }
    }

    @media (min-width: 600px) {

        .profile-pic {
            grid-column-start: 1;
            height: 100%;
        }

        .flex-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10rem;

            span {
                font-weight: 600;
            }
        }

        .logoGreen {
            max-width: 15%;
        }
    }
`