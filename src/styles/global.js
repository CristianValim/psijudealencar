import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    * {
      margin: 0;
      padding: 0;

      -webkit-font-smoothing : antialiased;
      -moz-osx-font-smoothing: grayscale;

      font: inherit;
    }

    :root {
      font-size        : 62.5%;
      scroll-behavior: smooth;
    }
    
    .ident {
            text-indent: 4rem;
        }

    body {
      font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 0.75rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    button {
        font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};

        border: none;
        background: transparent;
        cursor: pointer;
    }
    
    @media (max-width: 600px) {
      header {
        display: none;
      } 
    }
    
`