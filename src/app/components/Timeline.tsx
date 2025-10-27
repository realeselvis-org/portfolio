"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type TimelineEvent = {
  time?: string;
  tag?: string;
  title: string;
  description: string;
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
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-[#00514B] text-[#1Ddad2] ring-8 ring-[#122221] p-2">
            {event.icon}
          </span>

          {/* Contenido */}
          <div className="p-4 shadow-custom rounded-lg">

            {/* Fecha y tag */}
            <div className="">
              <div className="items-center justify-between mb-5 sm:flex">
                {event.time && (
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    {event.time}
                  </time>
                )}
              </div>
              {event.tag && (
                <div className="absolute top-0 right-0 p-1 text-sm rounded-tr-lg rounded-bl-lg  px-4 py-1 bg-black/10">
                  <h3>{event.tag}</h3>
                </div>
              )}
            </div>

            {/* Título y descripción */}
            <div className="p-3 rounded-lg bg-[#00514B]">
              <div className="text-sm font-normal text-gray-200 dark:text-gray-300">
                {event.link ? (
                  <a
                    href={event.link}
                    className="font-semibold text-gray-600 dark:text-white hover:underline"
                  >
                    {event.title}
                  </a>
                ) : (
                  <span className="font-semibold text-gray-600 dark:text-white">
                    {event.title}
                  </span>
                )}
              </div>

              {/* Descripción corta */}
              <div className="flex justify-between">
                <p className="text-xs mt-1">{event.description}</p>

                {/* Flecha toggle */}
                {event.largeDescription && (
                  <button
                    onClick={() => toggleDescription(index)}
                    className="ml-2 text-gray-300 hover:text-white transition-transform cursor-pointer"
                  >
                    {openIndex === index ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                )}
              </div>

              {/* Descripción larga animada */}
              <AnimatePresence initial={false}>
                {openIndex === index && event.largeDescription && (
                  <HeightMotion key="largeDescription">
                    <p className="text-xs text-gray-100">
                      {event.largeDescription}
                    </p>
                  </HeightMotion>
                )}
              </AnimatePresence>
            </div>

            {/* Labels */}
            {event.labels && event.labels.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-center md:justify-start mt-5">
                {event.labels.map((label, i) => (
                  <span
                    key={`${index}-label-${i}`}
                    className="bg-white/5 px-2 py-1 rounded-2xl text-[10px] font-mono"
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