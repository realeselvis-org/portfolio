"use client";
import { useEffect, useState } from "react";
import { useSystemTheme } from "./useSystemTheme";

type Theme = "light" | "dark" | "dark-custom" | "dev-dark" | "dev-light";

export function useThemeManager() {
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState<Theme>("dark");
  const [isToggleOn, setIsToggleOn] = useState(true); // Toggle siempre inicia ON (dark)

  // al montar: carga preferencia del usuario
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedToggle = localStorage.getItem("toggleState");
    
    if (savedTheme && savedToggle !== null) {
      setTheme(savedTheme);
      setIsToggleOn(savedToggle === "true");
    } else {
      // Primera vez: toggle ON, tema basado en SO
      setIsToggleOn(true);
      setTheme(systemTheme === "dark" ? "dark" : "dark-custom");
    }
  }, [systemTheme]);

  // Lógica principal: determina el tema basado en toggle y SO
  const getEffectiveTheme = (): Theme => {
    if (!isToggleOn) {
      // Toggle OFF: siempre light o dev-light
      return theme.includes("dev") ? "dev-light" : "light";
    } else {
      // Toggle ON: dark basado en SO o dark-custom, pero respeta dev
      if (theme.includes("dev")) {
        return "dev-dark";
      }
      return systemTheme === "dark" ? "dark" : "dark-custom";
    }
  };

  // aplica el tema al HTML
  useEffect(() => {
    const html = document.documentElement;
    const effectiveTheme = getEffectiveTheme();
    
    // Limpiar todas las clases de tema
    html.classList.remove("light", "dark", "theme-dev-light", "theme-dev-dark", "dark-custom");

    // Aplicar el tema efectivo
    if (effectiveTheme === "dev-dark" || effectiveTheme === "dev-light") {
      html.classList.add(`theme-${effectiveTheme}`);
    } else if (effectiveTheme === "dark-custom") {
      html.classList.add("dark-custom");
    } else {
      html.classList.add(effectiveTheme);
    }

    // Guardar estado
    localStorage.setItem("theme", theme);
    localStorage.setItem("toggleState", isToggleOn.toString());
  }, [theme, isToggleOn, systemTheme]);

  // Función para cambiar el toggle
  const toggleTheme = () => {
    setIsToggleOn(!isToggleOn);
  };

  // Función para cambiar el tipo de tema (dev vs normal)
  const setThemeType = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return { 
    theme: getEffectiveTheme(), 
    setTheme: setThemeType, 
    systemTheme,
    isToggleOn,
    toggleTheme
  };
}
