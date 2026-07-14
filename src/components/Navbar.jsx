import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", end: true },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "dark" || storedTheme === "light"
    ? storedTheme
    : getSystemTheme();
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasUserTheme, setHasUserTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light";
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (hasUserTheme) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasUserTheme]);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
    setHasUserTheme(true);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-petal/95 dark:bg-brand/95 backdrop-blur-md shadow-lg shadow-brand/10 dark:shadow-brand-muted/50 py-4 border-b border-brand/15 dark:border-petal/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src="/logo.png"
            alt="Coreshade Installation logo"
            className="h-10 w-auto max-w-[140px] sm:h-11 sm:max-w-[170px] md:h-12 md:max-w-[210px] lg:max-w-[240px] object-contain shrink-0"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `relative inline-flex pb-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 hover:text-brand dark:hover:text-cocoa-soft ${
                  isActive
                    ? "text-brand dark:text-petal"
                    : scrolled
                      ? "text-brand/70 dark:text-cocoa-soft"
                      : "text-brand/90 dark:text-cocoa-soft"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeInOut" }}
                        style={{ originX: 0.5 }}
                        className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-brand dark:bg-petal"
                      />
                    )}
                  </AnimatePresence>
                </>
              )}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-800 hover:border-brand dark:hover:border-brand text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-colors duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-800 hover:border-brand dark:hover:border-brand text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-colors duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand dark:text-petal p-2 cursor-pointer focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-petal/95 dark:bg-brand/95 backdrop-blur-md border-t border-brand/15 dark:border-petal/10 overflow-hidden shadow-xl shadow-brand/10"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative inline-flex w-fit pb-1 text-base font-semibold tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-brand dark:text-petal"
                        : "text-brand/60 dark:text-cocoa-soft hover:text-brand dark:hover:text-cocoa-soft"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: "easeInOut" }}
                            style={{ originX: 0.5 }}
                            className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-brand dark:bg-petal"
                          />
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

