import { ThemeProvider } from "styled-components";

import { useThemeHook } from "./useTheme";

const WithTheme = ({ children }: { children: React.ReactNode }) => {
  const { current } = useThemeHook();
  let activeTheme = {};

  console.log(current, "theme provider");

  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

export default WithTheme;
