"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * MeasureDemo
 * - Mide en tiempo real: ancho de la "card" y altura del "text div".
 * - Calcula: computed = cardWidth + textHeight
 * - Muestra los valores en un overlay visible en la página.
 *
 * Pegar en: src/components/MeasureDemo.tsx
 * Importar en page.tsx: import MeasureDemo from "@/components/MeasureDemo";
 * Usar: <MeasureDemo />
 */
export default function MeasureDemo() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // Ref para el nuevo elemento
  const newElementRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);
  const [computed, setComputed] = useState<number>(0);
  const [lastMeasuredAt, setLastMeasuredAt] = useState<string>("--");

  // RAF id para throttling
  const rafId = useRef<number | null>(null);

  const doMeasure = () => {
    const card = cardRef.current;
    const text = textRef.current;
    if (!card || !text) return;

    const cardRect = card.getBoundingClientRect();
    const textRect = text.getBoundingClientRect();

    const w = Math.round(cardRect.width);
    const h = Math.round(textRect.height);
    const total = w + h;

    setCardWidth(w);
    setTextHeight(h);
    setComputed(total);
    setLastMeasuredAt(new Date().toLocaleTimeString());
    
    // opcional: también actualizar el wrapper height para ver el efecto
    if (wrapperRef.current) {
      // no forzamos si computed === 0 (primer render)
      wrapperRef.current.style.height = `${total}px`;
    }

    // Actualizamos la altura del nuevo elemento
    if (newElementRef.current) {
      newElementRef.current.style.height = `${total}px`;
    }
  };

  const scheduleMeasure = () => {
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      doMeasure();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    });
  };

  useEffect(() => {
    // medición inicial
    scheduleMeasure();

    // listener global resize
    const onResize = () => {
      // console.log("window resize");
      scheduleMeasure();
    };
    window.addEventListener("resize", onResize);

    // ResizeObserver para detectar cambios en card o texto
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        scheduleMeasure();
      });
      if (cardRef.current) ro.observe(cardRef.current);
      if (textRef.current) ro.observe(textRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
    // [] intencional: queremos que el observer/listern vivan todo el ciclo de vida
  }, []);

  return (
    <>
      <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded-lg mt-8 shadow">
        {/* header */}
        <div className="bg-blue-200 p-2 rounded mb-3">
          <strong>Demo Card</strong>
        </div>

        {/* section2: image wrapper + text */}
        <div ref={cardRef} className="section2 grid gap-4">
          {/* image wrapper: le ponemos box-border para que la altura incluya padding */}
          <div
            ref={wrapperRef}
            className="p-2 rounded box-border overflow-hidden bg-white transition-[height] duration-300"
            // altura inicial la dejamos automática; se actualizará desde JS
            style={{ height: computed ? `${computed}px` : "auto" }}
          >
            <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
              <span className="text-xs text-gray-700">Imagen (wrapper)</span>
            </div>
          </div>

          {/* div de texto: su altura la medimos */}
          <div ref={textRef} className="p-2 rounded bg-pink-100">
            <h3 className="font-semibold">Text</h3>
            <p className="text-sm">
              Contenido variable que usamos para medir la altura. Cambia el ancho de la ventana
              para ver cómo cambia la medida. Puedes pegar más texto aquí para ver reflows.
            </p>
          </div>

          {/* Nuevo elemento con altura computada */}
          <div
            ref={newElementRef}
            className="bg-purple-300 transition-[height] duration-300"
            style={{ height: computed ? `${computed}px` : "auto" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-sm">Altura computada: {computed}px</span>
            </div>
          </div>
        </div>

        {/* footer: botón para forzar medición */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => scheduleMeasure()}
            className="px-3 py-1 bg-cyan-500 text-white rounded text-sm"
          >
            Forzar medida
          </button>
          <button
            onClick={() => {
              // añadir contenido dinámico para probar reflow
              if (textRef.current) {
                textRef.current.innerHTML += "<p>Linea extra añadida para forzar cambio de altura.</p>";
                scheduleMeasure();
              }
            }}
            className="px-3 py-1 bg-amber-500 text-white rounded text-sm"
          >
            Agregar texto (test)
          </button>
        </div>
      </div>

      {/* overlay con los valores medidos */}
      <div
        style={{
          position: "fixed",
          right: 12,
          bottom: 12,
          zIndex: 9999,
          background: "rgba(255,255,255,0.96)",
          padding: 10,
          borderRadius: 8,
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          fontSize: 12,
          minWidth: 180,
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 6 }}>Mediciones (live)</div>
        <div>cardWidth: <strong>{cardWidth}px</strong></div>
        <div>textHeight: <strong>{textHeight}px</strong></div>
        <div>computed = cardWidth + textHeight: <strong>{computed}px</strong></div>
        <div style={{ marginTop: 6, opacity: 0.8 }}>última medida: {lastMeasuredAt}</div>
      </div>
    </>
  );
}