import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

      body {
        overflow-y: auto;
        margin: 0;
        font-size: 14px;
        line-height: 1.5715;
      }

      body,
      #__next {
        width: 100%;
        transition: 0.3s background-color;
        background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
      }
      a {
        color: inherit;
        text-decoration: none;
        outline: none;
      }
      & * {
        font-family: "Quicksand", "Noto Sans KR", sans-serif !important;
        box-sizing: border-box;
      }
`;

export default GlobalStyle;
