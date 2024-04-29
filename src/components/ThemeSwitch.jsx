import { useThemeStore } from "../store/themeStore";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className={`switch ${theme === "dark" ? "dark" : "light"}`}
      onClick={toggleTheme}
    >
      <div className={`ball ${theme === "dark" ? "dark" : "light"}`}></div>
    </div>
  );
};
