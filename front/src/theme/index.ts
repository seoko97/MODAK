import { DefaultTheme } from "styled-components";

export const bp = {
  HDPC: "1200px",
  PC: "980px",
  TABLET: "768px",
  MOBILE: "480px",
};

export const lightTheme: DefaultTheme = {
  BP: bp,
  BAKCGROUND_COLOR: {
    PRIMARY_COLOR: "#ffffff",
    SECONDARY_COLOR: "#23374D",
    THIRDARY_COLOR: "#23374D",
    RGBA: "rgba(255, 255, 255, 0.4)",
  },
  FONT_COLOR: {
    PRIMARY_COLOR: "#212529",
    SECONDARY_COLOR: "#1b2e46",
  },
  BORDER_COLOR: {
    PRIMARY_COLOR: "#25282B",
  },
};

export const darkTheme: DefaultTheme = {
  BP: bp,
  BAKCGROUND_COLOR: {
    PRIMARY_COLOR: "#25282B",
    SECONDARY_COLOR: "#444444",
    THIRDARY_COLOR: "#444444",
    RGBA: "rgba(37, 40, 43, 0.4)",
  },
  FONT_COLOR: {
    PRIMARY_COLOR: "#f8f9fa",
    SECONDARY_COLOR: "#151516",
  },
  BORDER_COLOR: {
    PRIMARY_COLOR: "#ffffff",
  },
};
