"use client";

import { useState } from "react";
import Toggle from "./ui/Toggle";
import { useThemeManager } from "../../hooks/useThemeManager";
import { FileUser, X, Menu, Moon, Sun, Globe, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isToggleOn, toggleTheme } = useThemeManager();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md text-foreground transition-all duration-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute inset-y-0 left-0 flex items-center sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-cyan-400 opacity-80 transition-all duration-200" />
            ) : (
              <Menu className="w-5 h-5 text-cyan-400 opacity-80 transition-all duration-200" />
            )}
          </button>

          {/* Buttom CV*/}
          <div className="hidden sm:flex items-center sm:items-stretch sm:justify-start">
            <button
              onClick={() => console.log("Logo clicado")}
              className="flex shrink-0 items-center p-2 rounded-md bg-[#00514B] hover:bg-gray-700 transition-colors"
            >
              <FileUser className="h-6 w-6 text-cyan-400" />
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden sm:flex sm:justify-center sm:items-center sm:w-full space-x-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium leading-none"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Sección derecha (toggle + idioma) */}
          <div className="absolute right-0 flex items-center">
            {/* Toggle para cambiar tema */}
            <div>
              <Toggle
                checked={isToggleOn}
                onChange={() => toggleTheme()}
                leftIcon={<Sun />}
                rightIcon={<Moon />}
                size="md"
                variant="glow"
              />
            </div>

            {/* Dropdown Language */}
            <div className="relative ml-3">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md bg-[#00514B] text-white hover:bg-gray-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">ES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-md bg-white py-1 shadow-lg text-gray-700">
                  <button
                    onClick={() => {
                      console.log("Idioma cambiado a ES");
                      setProfileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    ES
                  </button>
                  <button
                    onClick={() => {
                      console.log("Idioma cambiado a EN");
                      setProfileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      console.log("Idioma cambiado a PT");
                      setProfileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    PT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu móvil */}
      {menuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
