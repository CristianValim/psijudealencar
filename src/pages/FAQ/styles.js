import styled, { keyframes } from "styled-components";

const scaleUpCenter = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
    height: 100vh;
    position: relative;
    background: ${({ theme }) => theme.COLORS.CREAM};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 10%;

    .title {
        font-family: ${({ theme }) => theme.FONTS.INNER_FONT};
        color: ${({ theme }) => theme.COLORS.GREEN};
        font-size: clamp(3.2rem, calc(2rem + 2vw), 5rem);
        font-weight: bold;

        position: absolute;
        top: 5rem;
        max-width: 25rem;
    }

    .flex-wrapper {
        display: grid;
        margin-top: 6rem;
    }

    .flex-wrapper ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        margin-inline: auto;
        margin-bottom: 5rem;

        li {
            position: relative;
            display: grid;
            place-content: center;
            text-align: center;
            font-size: clamp(1.2rem, calc(1rem + 1vw), 1.4rem);
            line-height: 1.2;
            max-width: 17rem;
            height: 12rem;
            border-radius: 3rem;
            padding: 1rem;
            background: #FFF;
            box-shadow: .3rem .3rem .5rem rgba(0, 0, 0, 0.4);
        }
    }
    
    button {
        display: grid;
        place-content: center;
        position: absolute;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        background: ${({ theme }) => theme.COLORS.GREEN};
        box-shadow: .3rem .3rem .5rem rgba(0, 0, 0, 0.4);

        &.plus {
            bottom: -1rem;
            right: -1rem;
        }

        &.minus {
            position: fixed;
            top: -2rem;
            right: -2rem;
            width: 7rem;
            height: 7rem;
        }

        &:hover {
          transition: all 500ms;
          transform: scale(1.1);
        }
    }
    
    .flex-wrapper p {
        max-width: 50rem;
        margin-left: auto;
        text-align: end;
        font-weight: 300;
        font-style: italic;
        font-size: clamp(1.2rem, calc(1rem + 1vw), 1.8rem);

        span {
            font-weight: 400;
            font-style: normal;
        }
    }
    
    .answer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    .answer {
        background: #FFF;
        position: relative;
        padding: 2rem;
        border-radius: 5rem;
        text-align: start;
        z-index: 1001;
        max-width: 80%;
        max-height: 80%;

        &.open {
            animation: ${scaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        h1 {
            margin-bottom: 1rem;
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.PURPLE};
            font-weight: 400;
        }
        
        .text {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;

            padding: 2rem 3rem;
            max-height: 60vh;
        }
        
        p {
            font-size: 1.6rem;
            text-align: start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 2rem;
        }
    }

    /* Desktop */
    @media (min-width: 600px) {
        .flex-wrapper {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 5%;

            ul li{
                min-width: 15rem;
                padding: 2rem;
            }
        }

        .title {
            position: absolute;
            top: 15rem;
            max-width: max-content;
        }

        .answer {            
            .text {
                display: grid;
                gap: 5%;
                place-items: center;

                h1 {
                    margin-bottom: 4rem;
                }

                .row-start {
                    grid-column-start: 1;
                }
                .row-end {
                    grid-column-start: 2;
                }
            }
        }
    }
`;
