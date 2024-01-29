import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: 1.4rem;
    line-height: 2.5rem;

    height: 100svh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.GREY};

    display: grid;
    place-content: center;

    h1 {
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
        margin-left: 10%;
    }

    .flex-wrapper {
        display: grid;
        gap: 5rem;
        width: 80%;
        margin-inline: auto;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;

        span {
            font-weight: 600;
        }

        .ident {
            text-indent: 4rem;
        }
    }
   
    .profile-pic {
        border-radius: 3rem;
        box-shadow: .7rem .7rem .5rem rgba(0, 0, 0, 0.4);
    }

    .logoGreen {
        max-width: 15%;
        position: absolute;
        bottom: 10%;
        right: 10%;
    }
`