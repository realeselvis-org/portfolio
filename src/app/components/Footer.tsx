"use client";

import { useState } from "react";
import { Terminal, Sun, Moon } from "lucide-react";


export default function Footer() {
    const [isMobile, setIsMobile] = useState(true);

  return (
    <footer className="mt-10 p-6 bg-black/80 backdrop-blur-md text-gray-300 text-center">
      {/* Línea superior */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Izquierda */}
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">© {new Date().getFullYear()} Mi Portafolio</span>
        </div>

        {/* Centro */}
        <div className="text-sm opacity-80">
          Hecho con <span className="text-cyan-400">Next.js</span> +{" "}
          <span className="text-cyan-400">TailwindCSS</span>
        </div>

        {/* Derecha (toggle decorativo) */}
            <div className="">
              <label className="relative inline-flex items-center cursor-pointer leading-none align-middle">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isMobile}
                  onChange={(e) => setIsMobile(e.target.checked)}
                  aria-label="Toggle desktop / mobile"
                />

                <div className="w-24 h-8 bg-[#0f1720] rounded-full" />

                <span
                  aria-hidden
                  className="absolute top-0 left-0 w-3/5 h-full bg-[rgba(6,182,212,0.14)] rounded-3xl 
                            transition-transform duration-300 transform z-10
                            scale-90 peer-checked:translate-x-68/100 shadow-[0_0_7px_1px_rgba(29,218,210,1)]"
                />

                <Sun
                  aria-hidden
                  className="absolute left-[21%] top-1/2 transform -translate-y-1/2 z-20 w-4 h-4 text-cyan-400
                            transition-all scale-110 duration-200 
                            peer-checked:opacity-40 peer-checked:scale-90 peer-checked:left-[16%]"
                />
                <Moon
                  aria-hidden
                  className="absolute right-[16%] top-1/2 transform -translate-y-1/2 z-20 w-4 h-4 text-cyan-400
                            opacity-40 scale-90 transition-all duration-200 
                            peer-checked:opacity-100 peer-checked:scale-110 peer-checked:right-[21%]"
                />
              </label>
        </div>
      </div>
    </footer>
  );
}
