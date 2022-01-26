import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/theme";

addDecorator(withThemesProvider([lightTheme, darkTheme]), ThemeProvider);
