import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/theme/GlobalStyle";
import { lightTheme } from "../src/theme";

export const decorator = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle theme={lightTheme} />
      <Story />
    </ThemeProvider>
  ),
];
