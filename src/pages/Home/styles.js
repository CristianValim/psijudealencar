import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 100svh;
    background: ${({ theme }) => theme.COLORS.CREAM};

    img {
        margin-inline: auto;
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        max-width: 50%;
    }

    button {
        font-size: 1.4rem;
        background: #FFF;
        padding: 1rem 3rem;
        border-radius: 3rem;
        position: absolute;
        top: 75%;
        left: 70%;
        
        a {
            display: flex;
            gap: 3rem;
            align-items: center;
        }
    }
`