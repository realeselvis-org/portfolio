// src/components/ExperienceCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

type Action = {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

type Props = {
  title: string;
  imageDesktop: string;
  imageMobile: string;
  subtitle: string;
  description: string;
  actions?: Action[]; // 👈 arreglo de botones opcional
  labels?: string[]; // <-- prop opcional
};

export default function ExperienceCard({
  title,
  imageDesktop,
  imageMobile,
  subtitle,
  description,
  actions = [], // por defecto vacío
  labels = [], // por defecto vacío
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
    <div className="experienceCard gap-12 flex flex-col bg-[#1C2A29] rounded-b-4xl shadow-[0_0px_18px_-4px_rgba(29,218,210,0.7)]">
      {/* Sección 1: Título + acciones */}
      <div className="section1 flex items-center p-4 pb-0 justify-between rounded">
        <div className="flex gap-2  rounded">
          <h3 className="font-allerta font-normal text-base text-[#00514B] leading-none">{title}</h3>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2">
          {actions.map((action, i) =>
            action.href ? (
              <a
                key={i}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-1.5 h-8 w-8 
                           bg-[#00514B] text-[#1Ddad2] 
                           cursor-pointer flex items-center justify-center
                           transition-all duration-300 ease-in-out
                           hover:scale-110 hover:shadow-[0_0_7px_1px_rgba(29,218,210,1)]
                           hover:[text-shadow:0_0_7px_rgba(29,218,210,1)]
                           active:scale-95"
              >
                {action.icon}
              </a>
            ) : (
              <button
                key={i}
                onClick={action.onClick}
                className="rounded-full p-1.5 h-8 w-8
                           bg-[#00514B] text-[#1Ddad2]
                           cursor-pointer flex items-center justify-center
                           transition-all duration-300 ease-in-out
                           hover:scale-110 hover:shadow-[0_0_7px_1px_rgba(29,218,210,1)]
                           hover:[text-shadow:0_0_7px_rgba(29,218,210,1)]
                           active:scale-95"
              >
                {action.icon}
              </button>
            )
          )}
        </div>
      </div>

        {/* Sección 2: Imagen + descripción */}
        <div
          ref={section2Ref}
          className={`section2 flex-1 mx-4 rounded transition-all duration-300  ${
            isMobile ? "flex items-center" : "grid"
          }`}
          style={{
            minHeight: initialHeight ? `${initialHeight}px` : undefined,
          }}
        >
          <div
            className={`rounded box-border overflow-hidden flex-shrink-0 ${
              isMobile ? "max-w-1/2 " : ""
            }`}
          >
            <img
              src={isMobile ? imageMobile : imageDesktop}
              alt={`${title} preview`}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className={`rounded flex-1 ${isMobile ? "pl-4" : "pt-4"}`}>
            <h2 className="font-mono font-light antialiased text-sm text-[#EFF9F7]">{subtitle}</h2>
            <p className="font-mono font-thin antialiased text-xs text-[#EFF9F7]">{description}</p>
          </div>
        </div>

        {/* Sección 3: Labels + Toggle (monitor / smartphone) */}
        <div className="section3 flex items-center justify-between rounded mt-auto m-4 ">
          <div className="flex flex-wrap gap-1">
            {labels.map((label, index) => (
              <span
                key={index}
                className="px-2 font-mono py-0.5 rounded-full bg-white text-[0.625rem] font-light shadow-sm border border-gray-300"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Toggle personalizado */}
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

              <Monitor
                aria-hidden
                className="absolute left-[21%] top-1/2 transform -translate-y-1/2 z-20 w-4 h-4 text-cyan-400
                          transition-all scale-110 duration-200 
                          peer-checked:opacity-40 peer-checked:scale-90 peer-checked:left-[16%]"
              />
              <Smartphone
                aria-hidden
                className="absolute right-[16%] top-1/2 transform -translate-y-1/2 z-20 w-4 h-4 text-cyan-400
                          opacity-40 scale-90 transition-all duration-200 
                          peer-checked:opacity-100 peer-checked:scale-110 peer-checked:right-[21%]"
              />
            </label>
          </div>
        </div>

    </div>
  );
}
