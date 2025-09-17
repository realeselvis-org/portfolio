// src/components/ExperienceCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

type Props = {
  title: string;
  imageDesktop: string;
  imageMobile: string;
};

export default function ExperienceCard({ title, imageDesktop, imageMobile }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [measuredTextHeight, setMeasuredTextHeight] = useState(0);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  // Medimos la altura del div de texto (cuando estamos en desktop)
  useEffect(() => {
    const measureText = () => {
      if (!textRef.current) return;
  
      const rect = textRef.current.getBoundingClientRect();
      const h = Math.round(rect.height);
  
      console.log("📏 Medición del texto:");
      console.log("rect completo:", rect);
      console.log("Altura calculada (h):", h);
      console.log("isMobile:", isMobile);
  
      if (!isMobile) {
        setMeasuredTextHeight(h);
        console.log("✅ Guardado en measuredTextHeight:", h);
      }
    };
  
    measureText();
  
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measureText) : null;
    if (ro && textRef.current) ro.observe(textRef.current);
  
    window.addEventListener("resize", measureText);
    return () => {
      window.removeEventListener("resize", measureText);
      if (ro && textRef.current) ro.unobserve(textRef.current);
    };
  }, [isMobile]);
  

  // Aplicamos la altura al wrapper de la imagen cuando isMobile === true
  useEffect(() => {
    const apply = () => {
      const wrapper = imageWrapperRef.current;
      const card = cardRef.current;
      if (!wrapper || !card) return;

      if (!isMobile) {
        // quitamos altura forzada en desktop
        wrapper.style.height = "";
        return;
      }

      // Ancho visual de la card (incluye paddings/bordes visuales)
      const cardWidth = Math.round(card.getBoundingClientRect().width);
      const desiredTotal = cardWidth + measuredTextHeight; // lo que pediste

      // wrapper tiene box-border, así height incluye padding
      wrapper.style.height = `${desiredTotal}px`;
    };

    apply();
    window.addEventListener("resize", apply);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(apply) : null;
    if (ro) {
      if (cardRef.current) ro.observe(cardRef.current);
      if (textRef.current) ro.observe(textRef.current);
      if (imageWrapperRef.current) ro.observe(imageWrapperRef.current);
    }

    return () => {
      window.removeEventListener("resize", apply);
      if (ro) ro.disconnect();
    };
  }, [isMobile, measuredTextHeight]);

  // (opcional) para debug: mostrar medidas en consola
  // useEffect(() => {
  //   console.log({ measuredTextHeight, isMobile });
  // }, [measuredTextHeight, isMobile]);

  return (
    <div ref={cardRef} className="experienceCard p-4 bg-gray-200 rounded-lg shadow">
      <div className="section1 bg-blue-200 flex items-center justify-between rounded">
        <div className="bg-red-200 p-2 rounded">
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div className="bg-green-200 p-2 rounded">
          <h2 className="font-semibold">Buttons</h2>
        </div>
      </div>

      <div
        className={`section2 bg-red-200 rounded transition-all duration-300 ${
          isMobile ? "flex items-center justify-between" : "grid"
        }`}
      >
        {/* wrapper: aplicamos height aquí, y usamos box-border para que incluya padding */}
        <div
          ref={imageWrapperRef}
          className="rounded box-border overflow-hidden transition-[height] duration-300"
        >
          <img
            src={isMobile ? imageMobile : imageDesktop}
            alt={`${title} preview`}
            className="rounded w-full h-full object-cover"
          />
        </div>

        <div ref={textRef} className="rounded">
          <h2 className="font-semibold">Text</h2>
          <p className="text-sm">Contenido variable que medimos en desktop.</p>
        </div>
      </div>

      <div className="section3 bg-blue-200 flex items-center justify-between p-2 rounded">
        <div className="bg-red-200 p-2 rounded">
          <h2 className="font-semibold">Labels</h2>
        </div>

        <div className="bg-green-200 p-2 rounded">
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
