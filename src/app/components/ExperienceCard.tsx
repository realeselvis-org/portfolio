// src/components/ExperienceCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Toggle from "./ui/Toggle";
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
  subtitle?: string;
  description: string | React.ReactNode
  actions?: Action[]; // arreglo de botones opcional
  labels?: string[]; // <-- prop opcional
};

export default function ExperienceCard({
  title,
  imageDesktop,
  imageMobile,
  subtitle,
  description,
  actions = [],
  labels = [],
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
    <div className="experienceCard flex flex-col bg-custom rounded-b-2xl">
      {/* Sección 1: Título + acciones */}
      <div className="section1 flex items-center p-4 pb-8 bg-custom relative z-10 justify-between">
        <div className="flex gap-2  rounded">
          <h2 className="font-normal text-base leading-none">{title}</h2>
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

      <div className="flex flex-1 flex-col grid gap-8 shadow-custom rounded-b-2xl">
        {/* Sección 2: Imagen + descripción */}
        <div
          ref={section2Ref}
          className={`section2 flex-1 mx-4 rounded transition-all duration-300  ${isMobile ? "flex items-center" : "grid"
            }`}
          style={{
            minHeight: initialHeight ? `${initialHeight}px` : undefined,
          }}
        >
          <div
            className={`rounded box-border overflow-hidden flex-shrink-0 ${isMobile ? "max-w-1/2 " : ""
              }`}
          >
            <img
              src={isMobile ? imageMobile : imageDesktop}
              alt={`${title} preview`}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className={`rounded flex-1 ${isMobile ? "pl-4" : "pt-4"}`}>
            <h3 className="font-mono font-light antialiased text-sm">{subtitle}</h3>
            <p className="font-mono font-thin antialiased text-[10px]">{description}</p>
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
            <Toggle
              checked={isMobile}
              onChange={(checked) => setIsMobile(checked)}
              leftIcon={<Monitor />}
              rightIcon={<Smartphone />}
              size="md"
              variant="glow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


