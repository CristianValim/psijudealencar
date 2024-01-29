import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};

    height: 100svh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.PURPLE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;

        .logoGreen {
            max-width: 33rem;
        }
        
        button {
            font-size: 2.4rem;

            background: #FFF;
            padding: 1.5rem;
            border-radius: 3rem;
            width: 35rem;
        
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
        font-size: 1.4rem;
        font-weight: 600;
        background: #FFF;
        border-radius: 3rem;
        min-width: 40rem;
        padding: 2rem;

        span {
            line-height: 2.5rem;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }

    iframe {
        border-radius: 3rem;
        border-style: none;
        min-height: 30rem;
        min-width: 40rem;
    }
}


`