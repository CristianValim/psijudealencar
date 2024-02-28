import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    position: relative;
    padding-inline: 10%;
    background: ${({ theme }) => theme.COLORS.GREY};

    display: grid;
    place-content: center;

    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: clamp(1.2rem, calc(1rem + 1vw), 1.8rem);
    line-height: 1.5;

    h1 {
        position: absolute;
        top: 5rem;

        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-size: clamp(3.2rem, calc(2rem + 2vw), 5rem);
        font-weight: bold;
    }

    .profile-pic {
        margin-bottom: 5rem;
        object-fit: cover;
        border-radius: 8rem;
        box-shadow: .7rem .7rem .5rem rgba(0, 0, 0, 0.4);
        height: auto;
    }

    span {
        font-weight: 600;
    }
    
    /* Desktop */
    @media (min-width: 600px) {
        h1 {
            top: 15rem;
        }
        .profile-pic {
            grid-column-start: 1;
            height: 100%;
        }

        .about p {
            font-size: calc(14px + (18 - 14) * (100vw - 600px) / (800 - 400));
        }

        .flex-wrapper {
            margin-top: 10rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10rem;
        }
    }
`;
