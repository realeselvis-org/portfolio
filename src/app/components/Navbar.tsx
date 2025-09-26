"use client";

import { useState } from "react";

import { FileUser, X, Menu,  } from "lucide-react";


const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1C2A29]/80 backdrop-blur-md text-white transition-all duration-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {menuOpen ? (
                <X
                  aria-hidden
                  className="w-5 h-5 text-cyan-400 opacity-80 transition-all duration-200"
                />
              ) : (
                <Menu
                  aria-hidden
                  className="w-5 h-5 text-cyan-400 opacity-80 transition-all duration-200"
                />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start bg-red-200">
            <div className="flex shrink-0 items-center ">
              <button
                onClick={() => console.log("Logo clicado")}
                className="p-2 rounded-md bg-[#00514B] hover:bg-gray-700 transition-colors"
              >
                <FileUser
                  aria-hidden
                  className="h-6 w-6 text-cyan-400"
                />
              </button>
            </div>

            {/* Links desktop */}
            <div className="hidden sm:ml-6 sm:block sm:pl-32 bg-green-300">
              <div className="flex space-x-4 bg-white">
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
            </div>
          </div>

          {/* Sección derecha (notificaciones + perfil) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Botón notificaciones */}
            <button className="rounded-full p-1 text-gray-400 hover:text-white">
              🔔
            </button>

            {/* Dropdown perfil */}
            <div className="relative ml-3">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex rounded-full focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="user"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg text-gray-700">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Sign out
                  </a>
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
