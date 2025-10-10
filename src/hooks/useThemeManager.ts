"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useSystemTheme } from "./useSystemTheme";

type Theme = "light" | "dark" | "dark-custom" | "dev-dark" | "dev-light";

export function useThemeManager() {
  const systemTheme = useSystemTheme();

  // Estados centrales
  const [isDevMode, setIsDevMode] = useState<boolean>(false); // normal (false) | dev (true)
  const [isToggleOn, setIsToggleOn] = useState<boolean>(true); // ON = oscuro, OFF = claro

  // Cargar preferencias existentes (compatibilidad con formato previo)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedToggle = localStorage.getItem("toggleState");

    if (savedTheme && savedToggle !== null) {
      setIsDevMode(savedTheme.includes("dev"));
      setIsToggleOn(savedToggle === "true");
    } else {
      // Comportamiento por defecto (mantener tu preferencia antigua: toggle ON inicialmente)
      setIsToggleOn(true);
      setIsDevMode(false);
    }
  }, [systemTheme]);

  // Tema efectivo calculado
  const theme = useMemo<Theme>(() => {
    if (isDevMode) return isToggleOn ? "dev-dark" : "dev-light";
    // normal
    return isToggleOn ? (systemTheme === "dark" ? "dark" : "dark-custom") : "light";
  }, [isDevMode, isToggleOn, systemTheme]);

  // Aplicar clase al <html> y persistir en localStorage
  useEffect(() => {
    const html = document.documentElement;
    // limpiar
    html.classList.remove("light", "dark", "dark-custom", "theme-dev-light", "theme-dev-dark");

    // aplicar
    if (theme === "dev-dark" || theme === "dev-light") {
      html.classList.add(`theme-${theme}`);
    } else if (theme === "dark-custom") {
      html.classList.add("dark-custom");
    } else {
      html.classList.add(theme);
    }

    // persistir (guardamos el theme efectivo para compatibilidad)
    localStorage.setItem("theme", theme);
    localStorage.setItem("toggleState", isToggleOn.toString());
  }, [theme, isToggleOn]);

  // Handlers públicos
  const toggleTheme = useCallback(() => {
    setIsToggleOn((s) => !s);
  }, []);

  // Setter explícito (mantiene compatibilidad con llamadas como setTheme("dev-light"))
  const setThemeType = useCallback((newTheme: Theme) => {
    switch (newTheme) {
      case "light":
        setIsDevMode(false);
        setIsToggleOn(false);
        break;
      case "dark":
        setIsDevMode(false);
        setIsToggleOn(true);
        break;
      case "dark-custom":
        setIsDevMode(false);
        setIsToggleOn(true);
        break;
      case "dev-light":
        setIsDevMode(true);
        setIsToggleOn(false);
        break;
      case "dev-dark":
        setIsDevMode(true);
        setIsToggleOn(true);
        break;
      default:
        // por seguridad: no hacer nada
        break;
    }
  }, []);

  // Helpers de más alto nivel (no cambian claro/oscuro a menos que quieras)
  const setModeNormal = useCallback(() => setIsDevMode(false), []);
  const setModeDev = useCallback(() => setIsDevMode(true), []);
  const toggleDevMode = useCallback(() => setIsDevMode((s) => !s), []);

  return {
    // lectura
    theme, // tema efectivo (lo que debes mostrar en UI)
    systemTheme,
    isToggleOn,
    isDevMode,

    // acciones
    toggleTheme,    // invierte oscuro/ claro
    setTheme: setThemeType, // setter explícito por compatibilidad
    setModeNormal,  // cambiar a Normal (preserva isToggleOn)
    setModeDev,     // cambiar a Dev (preserva isToggleOn)
    toggleDevMode,  // invertir Normal <-> Dev
  };
}
