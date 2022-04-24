import { createGlobalStyle } from 'styled-components';

export const GloalStyle = createGlobalStyle `
:root{
    --black:#000000;
    --blue: #005EFA; 
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html{ 
    @media(max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; // 14px
    }

    scroll-behavior: smooth;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 700;
  }

  button { 
    cursor:pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor:not-allowed;
  }

  ::-webkit-scrollbar {
  width: 0.6rem;
  background-color: #14213d;
}

::-webkit-scrollbar-thumb {
  background-color: #4539e6;
}

`;