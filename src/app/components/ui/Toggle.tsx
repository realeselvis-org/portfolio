// src/components/ui/Toggle.tsx
"use client";
import React, { useEffect, useState } from "react";

export type ToggleProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "glow" | "flat" | "contrast";
  className?: string;
  ariaLabel?: string;
};

export default function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  leftIcon,
  rightIcon,
  size = "md",
  variant = "glow",
  className = "",
  ariaLabel = "Toggle",
}: ToggleProps) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState<boolean>(defaultChecked);

  useEffect(() => {
    if (!isControlled) setInternal(defaultChecked);
  }, [defaultChecked, isControlled]);

  const isOn = isControlled ? !!checked : internal;

  function toggle() {
    const nv = !isOn;
    if (!isControlled) setInternal(nv);
    onChange?.(nv);
  }

  const sizeMap = {
    sm: { 
      container: "w-16 h-7", 
      thumb: "w-1/2", 
      icon: "w-2 h-2", 
      gap: "left-2 right-2",
      iconSize: "w-2 h-2"
    },
    md: { 
      container: "w-14 h-6 p-2", 
      thumb: "w-1/2", 
      icon: "w-3 h-3", 
      gap: "left-2 right-2 flex items-center",
      iconSize: "w-4 h-4"
    },
    lg: { 
      container: "w-32 h-10", 
      thumb: "w-1/2", 
      icon: "w-5 h-5", 
      gap: "left-4 right-4",
      iconSize: "w-5 h-5"
    },
  } as const;

  const s = sizeMap[size];
  const hasIcons = Boolean(leftIcon) || Boolean(rightIcon);

  const variantMap = {
    glow: {
      container: "bg-[#0f1720] rounded-full",
      thumb: "bg-[rgba(6,182,212,0.14)] shadow-[0_0_7px_1px_rgba(29,218,210,0.9)]",
      icon: "text-cyan-400",
    },
    flat: {
      container: "bg-gray-700",
      thumb: "bg-gray-300 shadow-none",
      icon: "text-white",
    },
    contrast: {
      container: "bg-white border border-gray-300",
      thumb: "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_4px_rgba(0,0,0,0.4)]",
      icon: "text-gray-800",
    },
  } as const;

  const v = variantMap[variant];
  const [leftGap, rightGap] = s.gap.split(" ");

  return (
    <div className={`${className} bg-yellow-300 flex items-center`}>
      <label
        role="switch"
        aria-checked={isOn}
        className="relative inline-flex items-center cursor-pointer leading-none align-middle"
      >
        {/* input (sr-only but focusable) */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={() => toggle()}
          aria-label={ariaLabel}
        />

        {/* fondo de la píldora */}
        <div
          className={`${s.container} ${v.container} rounded-full`}
        />

        {/* thumb / glow (mueve con translate) */}
        <span
          aria-hidden
          className={`absolute top-0 left-0 ${s.thumb} h-full ${v.thumb} rounded-full z-10
                      transition-transform duration-300 transform ${
                        isOn ? "translate-x-full" : "translate-x-0"
                      }`}
        />
        
        {/* iconos (izquierda y derecha) */}
        {hasIcons && leftIcon && (
        <div
            className={`absolute ${leftGap} top-1/2 -translate-y-1/2 z-20`}
        >
            <span
            aria-hidden
            className={`inline-flex items-center justify-center ${s.icon} ${v.icon} transition-all duration-200 ${
                isOn ? "opacity-40 scale-90" : "opacity-100 scale-100"
            }`}
            >
            {React.isValidElement(leftIcon)
                ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                    className: `${(leftIcon.props as any)?.className ?? ""} ${s.iconSize}`.trim(),
                })
                : <span className={s.iconSize}>{leftIcon}</span>}
            </span>
        </div>
        )}

        {hasIcons && rightIcon && (
        <div
            className={`absolute ${rightGap} top-1/2 -translate-y-1/2 z-20`}
        >
            <span
            aria-hidden
            className={`inline-flex items-center justify-center ${s.icon} ${v.icon} transition-all duration-200 ${
                isOn ? "opacity-100 scale-110" : "opacity-40 scale-90"
            }`}
            >
            {React.isValidElement(rightIcon)
                ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                    className: `${(rightIcon.props as any)?.className ?? ""} ${s.iconSize}`.trim(),
                })
                : <span className={s.iconSize}>{rightIcon}</span>}
            </span>
        </div>
        )}



      </label>
    </div>
  );
}
