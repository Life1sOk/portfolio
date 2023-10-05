import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { inter } from "@components/app/fonts";

import WithTheme from "@components/app/theme.provider";
import GlobalStyle from "@components/styles/global.style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WithTheme>
      <div className={inter.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    </WithTheme>
  );
};

export default appWithTranslation(App);
