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
  const [isMobile, setIsMobile] = useState(false);
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
          <h2 className="font-allerta text-lg leading-none heading-gradient">{title}</h2>
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
                className="custom-button"
              >
                {action.icon}
              </a>
            ) : (
              <button
                key={i}
                onClick={action.onClick}
                className="custom-button"
              >
                {action.icon}
              </button>
            )
          )}
        </div>
      </div>

      <div className={`flex flex-1 h-full p-4 shadow-custom rounded-b-2xl ${isMobile ? "flex-row gap-4" : "flex-col"}`}>
        {/* Sección 2: Imagen */}
        <div
          ref={section2Ref}
          className={`section2 flex-1 rounded transition-all duration-300  ${isMobile ? "flex items-center" : ""
            }`}
        >
          <img
            src={isMobile ? imageMobile : imageDesktop}
            alt={`${title} preview`}
            className={`object-contain ${isMobile ? "w-full h-full" : "w-full h-auto"
              }`}
          />
        </div>

        {/* Sección 3: Descirpción, labels y toggle */}
        <div
          className={`rounded flex-1 flex flex-col ${isMobile ? "mx-0 justify-between" : "mx-0"
            }`}
        >

          {/* Sección 3.1: Descirpción */}
          <div
            className={`flex flex-col ${isMobile ? "" : "justify-center flex-grow"
              }`}
          >
            <h3 className="font-mono font-light antialiased text-sm">{subtitle}</h3>
            <p className="font-mono font-thin antialiased text-xs">{description}</p>
          </div>

          {/* Sección 3.2.1: Labels + Toggle */}
          <div
            className={`flex justify-between ${isMobile
                ? "flex-col min-h-1/3"
                : "flex-row items-end mt-auto"
              }`}
          >
            {/* Sección 3.2.1.1: Labels */}
            <div className="flex flex-wrap gap-1">
              {labels.map((label, index) => (
                <span
                  key={index}
                  className="custom-label font-alumi"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Sección 3.2.1.2: Toggle */}
            <div className="flex justify-end">
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
    </div>
  );
}


