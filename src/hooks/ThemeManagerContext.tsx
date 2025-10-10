"use client";
import { createContext, useContext } from "react";
import { useThemeManager } from "./useThemeManager";

const ThemeManagerContext = createContext<ReturnType<typeof useThemeManager> | null>(null);

export function ThemeManagerProvider({ children }: { children: React.ReactNode }) {
  const themeManager = useThemeManager();
  return <ThemeManagerContext.Provider value={themeManager}>{children}</ThemeManagerContext.Provider>;
}

export function useThemeManagerContext() {
  const ctx = useContext(ThemeManagerContext);
  if (!ctx) throw new Error("useThemeManagerContext debe usarse dentro de <ThemeManagerProvider>");
  return ctx;
}
