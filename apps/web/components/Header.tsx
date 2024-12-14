"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        >
          Ivan Barinaga
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/blog"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            href="https://wa.me/5493415698000?text=Hola%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustaria%20saber%20mas"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Contactar
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/blog"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <Link
                  href="https://wa.me/5493415698000?text=Hola%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustaria%20saber%20mas"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
