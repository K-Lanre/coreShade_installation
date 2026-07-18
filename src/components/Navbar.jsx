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

const heroNavPaths = new Set([
  "/about",
  "/services",
  "/portfolio",
  "/process",
  "/contact",
]);

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

  const useHeroNavColors = heroNavPaths.has(location.pathname) && !scrolled;
  const desktopIdleLinkClass = useHeroNavColors
    ? "text-petal/90"
    : scrolled
      ? "text-brand/70 dark:text-cocoa-soft"
      : "text-brand/90 dark:text-cocoa-soft";
  const desktopActiveLinkClass = useHeroNavColors
    ? "text-petal"
    : "text-brand dark:text-petal";
  const desktopHoverClass = useHeroNavColors
    ? "hover:text-petal"
    : "hover:text-brand dark:hover:text-cocoa-soft";
  const themeButtonClass = useHeroNavColors
    ? "border-petal/35 text-petal hover:border-petal hover:text-petal"
    : "border-gray-300 text-gray-700 hover:border-brand hover:text-brand dark:border-gray-800 dark:text-gray-300 dark:hover:border-brand dark:hover:text-brand";
  const mobileMenuButtonClass = useHeroNavColors
    ? "text-petal"
    : "text-brand dark:text-petal";
  const activeUnderlineClass = useHeroNavColors
    ? "bg-petal"
    : "bg-brand dark:bg-petal";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-petal/95 dark:bg-brand/95 backdrop-blur-md shadow-lg shadow-brand/10 dark:shadow-brand-muted/50 py-4 border-b border-brand/15 dark:border-petal/10"
        : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 md:px-12 lg:px-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={theme === "dark" || useHeroNavColors ? "/logodark.png" : "/logo.png"}
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
                `relative inline-flex pb-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${desktopHoverClass} ${isActive ? desktopActiveLinkClass : desktopIdleLinkClass
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
                        className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full ${activeUnderlineClass}`}
                      />
                    )}
                  </AnimatePresence>
                </>
              )}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-colors duration-300 cursor-pointer ${themeButtonClass}`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-colors duration-300 cursor-pointer ${themeButtonClass}`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 cursor-pointer focus:outline-none transition-colors duration-300 ${mobileMenuButtonClass}`}
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
                    `relative inline-flex w-fit pb-1 text-base font-semibold tracking-wide uppercase transition-colors ${isActive
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
