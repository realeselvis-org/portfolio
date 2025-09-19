// src/components/ExperienceCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

type Props = {
  title: string;
  imageDesktop: string;
  imageMobile: string;
  subtitle: string;
  description: string;
};

export default function ExperienceCard({
  title,
  imageDesktop,
  imageMobile,
  subtitle,
  description
}: Props) {
  const [isMobile, setIsMobile] = useState(true);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  const section2Ref = useRef<HTMLDivElement | null>(null);

  // 📏 Medir altura solo la primera vez en modo móvil
  useEffect(() => {
    if (isMobile && section2Ref.current && initialHeight === null) {
      const measured = section2Ref.current.getBoundingClientRect().height;
      setInitialHeight(measured);
      console.log("✅ Altura inicial guardada:", measured);
    }
  }, [isMobile, initialHeight]);

  return (
    <div className="experienceCard flex flex-col p-4 bg-gray-200 rounded-lg shadow">
      {/* Sección 1 */}
      <div className="section1 bg-blue-200 flex items-center justify-between rounded">
        <div className="bg-red-200 p-2 rounded">
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div className="bg-green-200 p-2 rounded">
          <h2 className="font-semibold">Buttons</h2>
        </div>
      </div>

      {/* Sección 2 */}
      <div
        ref={section2Ref}
        className={`section2 py-10 bg-red-200 rounded transition-all duration-300 ${
          isMobile ? "flex items-center" : "grid"
        }`}
        style={{
          minHeight: initialHeight ? `${initialHeight}px` : undefined
        }}
      >
        <div className={`rounded box-border overflow-hidden flex-shrink-0 ${ isMobile ? "w-1/2" : ""}`}>
          <img
            src={isMobile ? imageMobile : imageDesktop}
            alt={`${title} preview`}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className={`rounded flex-1 ${isMobile ? "pl-4" : "pt-4"}`}>
          <h2 className="font-mono font-semibold">{subtitle}</h2>
          <p className="font-mono text-sm">{description} </p>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="section3 bg-blue-200 flex items-center justify-between rounded mt-auto">
        <div className="bg-red-200 p-2 rounded">
          <h2 className="font-semibold">Labels</h2>
        </div>

        <div className="bg-green-200 rounded">
          <label className="relative inline-flex items-center cursor-pointer leading-none align-middle">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isMobile}
              onChange={(e) => setIsMobile(e.target.checked)}
              aria-label="Toggle desktop / mobile"
            />

            <div className="w-28 h-12 bg-[#0f1720] rounded-full" />

            <span
              aria-hidden
              className="absolute top-0 left-0 w-1/2 h-full bg-[rgba(6,182,212,0.14)] rounded-full
                             transition-transform duration-300 transform z-10
                             peer-checked:translate-x-full shadow-[0_0_18px_rgba(6,182,212,0.18)]"
            />

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
  );
}
