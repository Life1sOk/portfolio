import { createContext, ReactNode, useState } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = { current: ThemeType; toggleHandler: (() => void) | null };

export const ThemeContext = createContext<ThemeContextType>({
  current: "light",
  toggleHandler: null,
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<ThemeType>("light");

  const toggleHandler = () => {
    if (current === "light") setCurrent("dark");
    if (current === "dark") setCurrent("light");
  };

  const value = { current, toggleHandler };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
