"use client";
import React, { useEffect, useState, useRef } from "react";
import type { SVGProps } from "react";

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
  defaultChecked = true,
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

  const isOn = isControlled ? !!checked : internal;

  function toggle() {
    const newValue = !isOn;
    if (!isControlled) setInternal(newValue);
    onChange?.(newValue);
  }

  const sizeMap = {
    sm: {
      container: "w-14 h-7 p-1",
      thumb: "w-5 h-5",
      iconSize: "w-1 h-1",
    },
    md: {
      container: "w-16 h-8 p-1",
      thumb: "w-6 h-6",
      iconSize: "w-2 h-2",
    },
    lg: {
      container: "w-20 h-10 p-1.5",
      thumb: "w-8 h-8",
      iconSize: "w-3 h-3",
    },
  } as const;
  const s = sizeMap[size];

  const variantMap = {
    glow: {
      container: "bg-byw rounded-full border-[0.5px] border-lightdark/30",
      thumb:
        "bg-secondary shadow-[0_0_7px_1px_rgba(29,218,210,0.2)]",
      iconActive: "text-cyan-400 scale-110",
      iconInactive: "text-cyan-700 opacity-85",
    },
    flat: {
      container: "bg-gray-700",
      thumb: "bg-gray-300 shadow-none",
      iconActive: "text-white scale-110",
      iconInactive: "text-gray-400 opacity-50",
    },
    contrast: {
      container:
        "bg-white border border-gray-300 shadow-inner rounded-full",
      thumb:
        "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_5px_rgba(0,0,0,0.3)]",
      iconActive: "text-gray-900 scale-110",
      iconInactive: "text-gray-500 opacity-50",
    },
  } as const;
  const v = variantMap[variant];

  const renderIcon = (
    icon: React.ReactNode,
    active: boolean,
    sizeClass: string
  ) => {
    if (React.isValidElement(icon)) {
      const el = icon as React.ReactElement<SVGProps<SVGSVGElement>>;
      return React.cloneElement(el, {
        className: `${el.props.className ?? ""} ${sizeClass} transition-all duration-300 ${active ? v.iconActive : v.iconInactive
          }`.trim(),
      });
    }
    return (
      <span
        className={`${sizeClass} transition-all duration-300 ${active ? v.iconActive : v.iconInactive
          }`}
      >
        {icon}
      </span>
    );
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [thumbSize, setThumbSize] = useState<number | null>(null);
  const [offLeft, setOffLeft] = useState<number>(0);
  const [onLeft, setOnLeft] = useState<number>(0);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const style = getComputedStyle(c);
    const paddingLeft = parseFloat(style.paddingLeft || "0");
    const paddingRight = parseFloat(style.paddingRight || "0");
    const w = c.clientWidth;
    const h = c.clientHeight;
    const thumb = h - paddingLeft - paddingRight - 2;
    const off = paddingLeft;
    const on = w - thumb - paddingRight;
    setThumbSize(thumb);
    setOffLeft(off);
    setOnLeft(on);
  }, [size]);

  return (
    <div className={`${className} flex items-center`}>
      <label
        role="switch"
        aria-checked={isOn}
        className="relative inline-flex items-center cursor-pointer select-none"
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggle}
          aria-label={ariaLabel}
        />

        <div
          ref={containerRef}
          className={`${s.container} ${v.container} relative flex items-center justify-between`}
        >
          {/* Íconos de fondo (inactivos, opacos) */}
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
            <span className="opacity-90">
              {renderIcon(leftIcon, false, s.iconSize)}
            </span>
            <span className="opacity-40">
              {renderIcon(rightIcon, false, s.iconSize)}
            </span>
          </div>

          {/* Thumb con ícono activo */}
          <span
            style={{
              width: thumbSize ? `${thumbSize}px` : undefined,
              height: thumbSize ? `${thumbSize}px` : undefined,
              left: isOn ? `${onLeft}px` : `${offLeft}px`,
              transform: isOn
                ? "translateY(-50%) scale(1.1)"
                : "translateY(-50%) scale(1.1)",
            }}
            className={`absolute top-1/2 rounded-full ${v.thumb} transition-all duration-300 active:scale-x-135 flex items-center justify-center`}
          >
            <span className="pointer-events-none">
              {isOn
                ? renderIcon(rightIcon, true, s.iconSize)
                : renderIcon(leftIcon, true, s.iconSize)}
            </span>
          </span>
        </div>
      </label>
    </div>
  );
}
