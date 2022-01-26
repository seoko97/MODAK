import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@src/theme/GlobalStyle";
import { lightTheme } from "@src/theme";
import { wrapper } from "@src/store";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head></Head>
      <GlobalStyle theme={lightTheme} />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);
