import styled from "styled-components";

export const Container = styled.header`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: 1.4rem;

    min-height:  5vh;
    background: #FFF;
    top: 0;
    position: sticky;
    z-index: 10;

    nav {
      display: flex;
      justify-content: flex-end;
    }

    a {
      padding: 1.5rem 2rem;
      border-radius: 2rem 2rem 0 0;
    }

    nav > :nth-child(1){
      background: ${({ theme }) => theme.COLORS.CREAM};   
    }

    nav > :nth-child(2){
      background: ${({ theme }) => theme.COLORS.GREY};   
    }

    nav > :nth-child(3){
      background: ${({ theme }) => theme.COLORS.GREEN};   
    }

    nav > :nth-child(4){
      background: ${({ theme }) => theme.COLORS.PURPLE};   
    }
`