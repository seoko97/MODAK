import React, { useCallback, useEffect, useMemo } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@src/theme/GlobalStyle";
import { darkTheme, lightTheme } from "@src/theme";
import { wrapper } from "@src/store";
import cookieParser from "@src/lib/cookieParser";
import { useCookies } from "react-cookie";
import DarkModeButton from "@src/components/UI/molecules/DarkModeButton";
import AppLayout from "@src/components/UI/templates/AppLayout";

const App = ({ Component, pageProps, mode: modeInCookie }) => {
  const [cookies, setCookies] = useCookies(["mode"]);
  const mode = useMemo(() => cookies.mode || modeInCookie, [cookies.mode, modeInCookie]);

  useEffect(() => {
    if (!cookies.mode) setCookies("mode", "light");
  }, [setCookies, cookies.mode]);

  const onClickDarkMode = useCallback(() => {
    setCookies("mode", mode === "light" ? "dark" : "light");
  }, [mode, setCookies]);

  return (
    <>
      <Head>
        <title>MODAK</title>
      </Head>
      <GlobalStyle theme={mode === "light" ? lightTheme : darkTheme} />
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <DarkModeButton mode={mode} onClick={onClickDarkMode} />
      </ThemeProvider>
    </>
  );
};

App.getInitialProps = async ({ ctx }) => {
  const cookies = ctx.req?.headers?.cookie;
  const { mode } = cookieParser(cookies);

  return { mode: mode || "light" };
};

export default wrapper.withRedux(App);
