import styled from "styled-components";

export const Container = styled.div`
    height: 100svh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.GREEN};

    display: grid;
    place-content: center;

    h1 {
        font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
        color: ${({ theme }) => theme.COLORS.CREAM};
        font-size: 2.4rem;
        font-weight: bold;

        margin-bottom: 2rem;
    }
    
    .flex-wrapper ul{
        display: flex;
        gap: 5rem;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            color: ${({ theme }) => theme.COLORS.BLACK};
            line-height: 2.5rem;
            font-size: 1.4rem;
            font-family: ${({ theme }) => theme.FONTS.INNER_FONT};

            width: 15rem;
            height: 15rem;
            background: #fff;
            border-radius: 3rem;
            box-shadow: .7rem .7rem .5rem rgba(0, 0, 0, 0.4);
        }
    }

    .logoPurple {
        max-width: 15%;
        position: absolute;
        bottom: 10%;
        right: 10%;
    }
`