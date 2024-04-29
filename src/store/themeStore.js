import { create } from "zustand";

// Función para obtener el tema del sistema
const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

// Define el store Zustand para el tema
export const useThemeStore = create((set) => ({
  theme: getSystemTheme(), // Tema basado en el tema del sistema
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light", // Cambiar entre light y dark
    })),
}));
