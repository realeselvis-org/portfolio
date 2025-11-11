"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type TimelineEvent = {
  time?: string;
  tag?: string;
  title: string;
  largeDescription?: string;
  link?: string;
  icon?: React.ReactNode;
  labels?: string[];
};

type Props = {
  events: TimelineEvent[];
};

const Timeline: React.FC<Props> = ({ events }) => {
  // Estado local para controlar qué ítem está expandido
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ol className="relative border-s-4 border-[#00514B]">
      {events.map((event, index) => (
        <li key={index} className="mb-10 ms-10">
          {/* Icono */}
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-[#00514B] text-[#1Ddad2] ring-8 ring-[var(--background)] p-2">
            {event.icon}
          </span>

          {/* Contenido */}
          <div className="relative p-4 shadow-custom rounded-lg">

            {/* Fecha y tag */}
            <div className="">
              <div className="items-center justify-between mb-3 mt-[-5px] sm:flex">
                {event.time && (
                  <time className="font-alumi font-semibold text-base mb-0 tracking-[.075em]">
                    {event.time}
                  </time>
                )}
              </div>
              {event.tag && (
                <div className="absolute top-0 right-0 p-1 text-sm rounded-tr-lg rounded-bl-lg px-3 py-1 bg-primary">
                  <p className="font-allerta">{event.tag}</p>
                </div>
              )}
            </div>

            {/* Título y descripción - DIV  clickable */}
            <div
              className={`p-3 rounded-lg bg-[#00514B] transition-colors ${event.largeDescription
                  ? 'cursor-pointer hover:bg-[#03726a]' // Estilos de interacción si es expandible
                  : ''
                }`}
              onClick={() => event.largeDescription && toggleDescription(index)}
              aria-expanded={openIndex === index}
              role="button"
              tabIndex={event.largeDescription ? 0 : -1}
            >
              <div className="text-sm font-normal flex justify-between items-center">
                {event.link ? (
                  <a
                    href={event.link}
                    // Usamos onClick para evitar que el evento se propague al div padre y cierre la descripción inmediatamente después de abrirla
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-allerta text-lg hover:underline pointer-events-auto"
                  >
                    {event.title}
                  </a>
                ) : (
                  <span className="font-allerta text-lg pointer-events-auto">
                    {event.title}
                  </span>
                )}

                {/* Flecha toggle - Ahora es solo un indicador visual, el padre maneja el clic */}
                {event.largeDescription && (
                  <span className="ml-2 text-gray-300 transition-transform flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>


              {/* Descripción larga animada */}
              <AnimatePresence initial={false}>
                {openIndex === index && event.largeDescription && (
                  <HeightMotion key="largeDescription">
                    <p className="custom-text font-jetmono">
                      {event.largeDescription}
                    </p>
                  </HeightMotion>
                )}
              </AnimatePresence>
            </div>

            {/* Labels */}
            {event.labels && event.labels.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-4">
                {event.labels.map((label, i) => (
                  <span
                    key={`${index}-label-${i}`}
                    className="custom-label font-alumi"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

/* --- Componente auxiliar con animación de altura fluida --- */
const HeightMotion = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    // mide en el siguiente frame para asegurarnos que estilos/paint estén listos
    const measure = () => {
      if (ref.current) {
        // scrollHeight incluye padding interior del wrapper
        setHeight(ref.current.scrollHeight);
      }
    };

    // requestAnimationFrame garantiza medición tras layout
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [children]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{ overflow: "hidden" }} // usalo en style para mayor certeza
    >
      {/* wrapper que se mide */}
      <div ref={ref} className="pt-2">
        {children}
      </div>
    </motion.div>
  );
};

export default Timeline;
