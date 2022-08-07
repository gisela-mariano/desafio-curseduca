import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root{
    height: 100%;
  }
  :root {
    --yellow: rgba(244, 153, 25, 1);
    --blue: rgba(11, 61, 138, 1);
    --low-gray: rgba(217, 217, 217, 1);
    --gray: rgba(159, 153, 153, 1);
    --high-gray: rgba(45, 41, 41, 1);
    --red: rgba(225, 57, 20, 1);
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body{
    font-family: 'Poppins', sans-serif;
    cursor: default;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
      background: var(--bg-red-middle);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--bg-red-ligth);
      border-radius: 3px;
    }
  }
  button{
    cursor: pointer;
    transition: all 0.5s ease;
  }

  main{
    background-color: var(--low-gray);
  }

  .erro{
    font-size: 0.8rem;
    color: var(--red);
  }
`;

export default GlobalStyle;