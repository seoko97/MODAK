import React, { useCallback, useEffect, useMemo } from "react";
import type { AppContext, AppProps } from "next/app";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@theme/.";
import cookieParser from "@lib/cookieParser";
import GlobalStyle from "@theme/GlobalStyle";
import DarkModeButton from "@molecules/DarkModeButton";
import AppLayout from "@templates/AppLayout";

interface Props extends AppProps {
  mode: string;
}

const App = ({ Component, pageProps, mode: modeInCookie }: Props) => {
  const [cookies, setCookies] = useCookies(["mode"]);
  const mode = useMemo(() => cookies.mode || modeInCookie, [cookies.mode, modeInCookie]);

  useEffect(() => {
    if (!cookies.mode) setCookies("mode", "light");
  }, []);

  const onClickDarkMode = useCallback(() => {
    setCookies("mode", mode === "light" ? "dark" : "light");
  }, [mode]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle theme={mode === "light" ? lightTheme : darkTheme} />
      <AppLayout>
        <Component {...pageProps} />
        <DarkModeButton mode={mode} onClick={onClickDarkMode} />
      </AppLayout>
    </ThemeProvider>
  );
};

App.getInitialProps = async ({ ctx }: AppContext) => {
  const cookies = ctx.req?.headers?.cookie;
  const { mode } = cookieParser(cookies);

  return { mode: mode || "light" };
};

export default App;
