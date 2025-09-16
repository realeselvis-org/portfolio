"use client";
import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:px-10">
      {/* MAIN */}
      <main className="w-full row-start-2">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Título */}
          <h1 className="text-2xl font-bold">Elvis Reales Portfolio + IA</h1>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="experienceCard p-4 bg-gray-200 rounded-lg shadow">
              {/* Section 1 */}
              <div className="section1 bg-blue-200 flex items-center justify-between p-2 rounded">
                <div className="bg-red-200 p-2 rounded">
                  <h2 className="font-semibold">Title</h2>
                </div>
                <div className="bg-green-200 p-2 rounded">
                  <h2 className="font-semibold">Buttons</h2>
                </div>
              </div>

              {/* Section 2 (ahí puedes cambiar la imagen/clases según isMobile) */}
              <div
                className={`section2 bg-blue-200 p-2 rounded transition-all duration-300 ${
                  isMobile ? "flex items-center justify-between" : "grid"
                }`}
              >
                <div className="bg-red-200 p-2 rounded">
                  <img
                    src={
                      isMobile
                        ? "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/captura-de-pantalla-2025-08-26_1egdf2l.png" // reemplaza por tu vertical
                        : "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_16zz7e4.png"
                    }
                    alt="Test"
                    className="rounded max-w-full h-auto"
                  />
                </div>
                <div className="bg-green-200 p-2 rounded">
                  <h2 className="font-semibold">Text</h2>
                </div>
              </div>

              {/* Section 3 */}
              <div className="section3 bg-blue-200 flex items-center justify-between p-2 rounded">
                <div className="bg-red-200 p-2 rounded">
                  <h2 className="font-semibold">Labels</h2>
                </div>

                {/* Toggle con icons — input controla el estado y peer-checked las clases visuales */}
                <div className="bg-green-200 p-2 rounded">
                  <label className="relative inline-flex items-center cursor-pointer leading-none align-middle">
                    {/* input CONTROLADO: debe ir primero para que peer-... funcione en siblings */}
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isMobile}
                      onChange={(e) => setIsMobile(e.target.checked)}
                      aria-label="Toggle desktop / mobile"
                    />

                    {/* Fondo de la píldora */}
                    <div className="w-28 h-12 bg-[#0f1720] rounded-full"></div>

                    {/* Thumb / glow que se mueve (hermano del input para que peer-checked funcione) */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 w-1/2 h-full bg-[rgba(6,182,212,0.14)] rounded-full
                                 transition-transform duration-300 transform z-10
                                 peer-checked:translate-x-full shadow-[0_0_18px_rgba(6,182,212,0.18)]"
                    />

                    {/* Íconos como siblings absolutos — se estilizan con peer-checked */}
                    <Monitor
                      aria-hidden
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-6 h-6 text-cyan-400
                                 transition-all duration-200 peer-checked:opacity-40 peer-checked:scale-90"
                    />

                    <Smartphone
                      aria-hidden
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-6 h-6 text-cyan-400
                                 opacity-40 scale-90 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 bg-gray-200 rounded-lg shadow">Card 2</div>

            {/* Card 3 */}
            <div className="p-4 bg-gray-200 rounded-lg shadow">Card 3</div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 row-start-3">
        © {new Date().getFullYear()} Elvis Reales
      </footer>
    </div>
  );
}