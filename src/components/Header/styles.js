import styled from "styled-components";

export const Container = styled.header`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: 1.4rem;

    width: 100%;
    min-height:  5vh;
    background: #FFF;
    position: fixed;
    z-index: 10;

    nav {
      display: flex;
      justify-content: flex-end;
    }

    a {
      padding: 2rem 2.5rem;
      border-radius: 2rem 2rem 0 0;
    }

    nav > :nth-child(2){
      background: ${({ theme }) => theme.COLORS.GREY};   
    }

    nav > :nth-child(3){
      background: ${({ theme }) => theme.COLORS.GREEN};   
    }

    nav > :nth-child(4){
      background: ${({ theme }) => theme.COLORS.CREAM};   
    }

    nav > :nth-child(5){
      background: ${({ theme }) => theme.COLORS.PURPLE};   
    }
`