import { ThemeProvider } from "styled-components";

const WithTheme = ({ children }: { children: React.ReactNode }) => {
  let activeTheme = {};

  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

export default WithTheme;
