"use client";
import React from "react";

export type TimelineEvent = {
  title: string;
  description: string;
  time?: string;            
  link?: string;            
  icon?: React.ReactNode;   
};

type Props = {
  events: TimelineEvent[];
};

const Timeline: React.FC<Props> = ({ events }) => {
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
            <div className="items-center justify-between mb-3 sm:flex">
              {event.time && (
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  {event.time}
                </time>
              )}
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
            </div>

            <div className="p-3 rounded-lg bg-[#00514B]">
              <p className="text-xs italic font-normal text-gray-200">
                {event.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
