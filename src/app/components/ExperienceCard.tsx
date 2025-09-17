// src/components/ExperienceCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

type Props = {
  title: string;
  imageDesktop: string;
  imageMobile: string;
};

export default function ExperienceCard({
  title,
  imageDesktop,
  imageMobile,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [measuredTextHeight, setMeasuredTextHeight] = useState(0);
  // Nuevo estado para la altura de la imagen en desktop
  const [measuredImageDesktopHeight, setMeasuredImageDesktopHeight] = useState(0);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  // Mide la altura del div de texto Y de la imagen en desktop.
  useEffect(() => {
    const measureElements = () => {
      // Si estamos en modo móvil, no medimos los elementos de desktop.
      if (isMobile) {
        return;
      }

      // Medición del texto
      if (textRef.current) {
        const textHeight = Math.round(textRef.current.getBoundingClientRect().height);
        setMeasuredTextHeight(textHeight);
        console.log("✅ Altura del texto guardada:", textHeight);
      }

      // Medición de la imagen en desktop
      if (imageRef.current) {
        const imageDesktopHeight = Math.round(imageRef.current.getBoundingClientRect().height);
        setMeasuredImageDesktopHeight(imageDesktopHeight);
        console.log("✅ Altura de la imagen en desktop guardada:", imageDesktopHeight);
      }
    };

    // Medición inicial al cargar el componente
    measureElements();

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measureElements)
        : null;
    if (ro) {
      if (textRef.current) ro.observe(textRef.current);
      if (imageRef.current) ro.observe(imageRef.current);
    }

    // Escucha el evento de redimensionamiento de la ventana
    window.addEventListener("resize", measureElements);

    return () => {
      window.removeEventListener("resize", measureElements);
      if (ro) ro.disconnect();
    };
  }, [isMobile]);

  // Aplica la altura al wrapper de la imagen cuando isMobile === true
  useEffect(() => {
    const applyHeight = () => {
      const wrapper = imageWrapperRef.current;
      if (!wrapper) return;

      if (!isMobile) {
        // En desktop, quita la altura forzada
        wrapper.style.height = "";
        return;
      }

      // ¡El cálculo correcto!
      const desiredTotal = measuredImageDesktopHeight + measuredTextHeight;
      console.log(`✨ Aplicando altura en móvil: ${desiredTotal}px (Imagen D: ${measuredImageDesktopHeight} + Texto: ${measuredTextHeight})`);

      // Asegurarse de que el cálculo tenga un valor positivo antes de aplicar
      if (desiredTotal > 0) {
        wrapper.style.height = `${desiredTotal}px`;
      }
    };

    // Se ejecuta cada vez que cambia el estado de los valores medidos o el modo
    applyHeight();

  }, [isMobile, measuredImageDesktopHeight, measuredTextHeight]);

  return (
    <div ref={cardRef} className="experienceCard p-4 bg-gray-200 rounded-lg shadow">
      {/*... resto del código...*/}
      <div className="section1 bg-blue-200 flex items-center justify-between rounded">
        <div className="bg-red-200 p-2 rounded">
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div className="bg-green-200 p-2 rounded">
          <h2 className="font-semibold">Buttons</h2>
        </div>
      </div>

      <div
        className={`section2 py-10 bg-red-200 rounded transition-all duration-300 ${isMobile ? "flex items-stretch" : "grid"
          }`}
      >
        <div
          ref={imageWrapperRef}
          className="rounded box-border overflow-hidden flex-shrink-0"
          style={{ height: isMobile ? `${measuredImageDesktopHeight}px` : "auto" }}
        >
          <img
            ref={imageRef}
            src={isMobile ? imageMobile : imageDesktop}
            alt={`${title} preview`}
            className="h-full w-auto object-contain"
          />
        </div>


        <div
          ref={textRef}
          className={`rounded flex-1] ${isMobile ? "pl-4" : "pt-4" }`} // 👈 clave
        >
          <h2 className="font-semibold">Text</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
        </div>
      </div>


      <div className="section3 bg-blue-200 flex items-center justify-between rounded">
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