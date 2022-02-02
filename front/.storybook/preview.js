import * as NextImage from "next/image";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { lightTheme } from "../src/theme";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const GlobalStyle = createGlobalStyle`
    ${reset}

    body.sb-show-main {
        margin: 0 !important;
        padding: 0 !important;
      }
      html,
      body {
        overflow-x: hidden;
        width: 100%;
        height: 100%;
      }
      body {
        overflow-y: overlay;
        margin: 0;
        font-size: 14px;
        line-height: 1.5715;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      a {
        text-decoration: none;
        outline: none;
      }
      & * {
        font-family: 'Noto Sans KR', sans-serif !important;
      }
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
      <GlobalStyle theme={lightTheme} />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "dark",
        value: "#333333",
      },
    ],
  },
};
