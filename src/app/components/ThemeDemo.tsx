"use client";

import { useThemeManager } from "../../hooks/useThemeManager";

export default function ThemeDemo() {
  const { theme, isToggleOn, toggleTheme, setTheme, systemTheme } = useThemeManager();

  return (
    <div className="p-6 bg-background text-foreground border border-gray-300 rounded-lg shadow-custom">
      <h3 className="text-xl font-bold mb-4">🎨 Demo del Sistema de Temas</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Tema Efectivo:</strong> <span className="text-cyan-400">{theme}</span>
          </div>
          <div>
            <strong>Toggle Estado:</strong> <span className="text-cyan-400">{isToggleOn ? "ON (Oscuro)" : "OFF (Claro)"}</span>
          </div>
          <div>
            <strong>Sistema Operativo:</strong> <span className="text-cyan-400">{systemTheme}</span>
          </div>
          <div>
            <strong>Clase HTML:</strong> <span className="text-cyan-400">{document.documentElement.className}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-300">
          <h4 className="font-semibold mb-2">Controles:</h4>
          <div className="space-y-2">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              {isToggleOn ? "Apagar Toggle (→ Claro)" : "Encender Toggle (→ Oscuro)"}
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  !theme.includes("dev") 
                    ? "bg-cyan-500 text-white" 
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setTheme("dev-light")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  theme.includes("dev") 
                    ? "bg-orange-500 text-white" 
                    : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                }`}
              >
                Dev
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-300">
          <h4 className="font-semibold mb-2">Lógica del Sistema:</h4>
          <div className="text-sm space-y-1 text-gray-600">
            <p>• <strong>Toggle ON + Normal + SO Oscuro:</strong> → "dark"</p>
            <p>• <strong>Toggle ON + Normal + SO Claro:</strong> → "dark-custom"</p>
            <p>• <strong>Toggle ON + Dev:</strong> → "dev-dark"</p>
            <p>• <strong>Toggle OFF + Normal:</strong> → "light"</p>
            <p>• <strong>Toggle OFF + Dev:</strong> → "dev-light"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
