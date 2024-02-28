import styled from "styled-components";

export const Container = styled.header`
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};

    width: 100%;
    background: #FFF;
    position: fixed;
    z-index: 10;

    nav {
      display: flex;
      text-align: center;

      a {
        border-radius: 2rem 2rem 0 0;
      }
    }

    .mobile {
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
      text-align: center;

      height: 4vh;
      font-size: 1.2rem;

      a {
        flex-grow: 1;
        padding: 1.1rem 0;
      }
    }

    .desktop {
        justify-content: flex-end;

        a {
        padding: 2rem 2.5rem;
        border-radius: 2rem 2rem 0 0;
        font-size: 1.4rem;
      }
    }

    nav > :nth-child(1){
      background: #FFF;
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

    @media (max-width: 600px) {
      .desktop {
        display: none;
      }
    }

    @media (min-width: 600px) {
      .mobile {
        display: none;
      }
    }
`