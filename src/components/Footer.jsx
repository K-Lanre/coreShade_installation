import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Our Story", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 bg-[#e5bdca] pt-16 pb-8 transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 mb-12 md:grid-cols-3 md:px-12 lg:px-16">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img
                src="/logo.png"
                alt="Coreshade Installation logo"
                className="h-10 w-auto max-w-[140px] sm:h-11 sm:max-w-[170px] md:h-12 md:max-w-[210px] lg:max-w-[240px] object-contain shrink-0 dark:hidden"
              />
              <img
                src="/logodark.png"
                alt="Coreshade Installation logo"
                className="hidden h-10 w-auto max-w-[140px] sm:h-11 sm:max-w-[170px] md:h-12 md:max-w-[210px] lg:max-w-[240px] object-contain shrink-0 dark:block"
              />
            </Link>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand/70 dark:text-cocoa-soft">
            Commercial interior fit-out specialists. Transforming interior
            spaces through expert design, specialist blind supply, professional
            installation, and complete fit-out solutions.
          </p>
          {/* <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft"
            >
              <Linkedin size={20} />
            </a>
          </div> */}
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-brand dark:text-petal">
            Explore
          </h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative inline-flex pb-1 text-sm transition-colors duration-300 ${isActive
                      ? "text-brand dark:text-petal"
                      : "text-brand/70 hover:text-brand dark:text-cocoa-soft dark:hover:text-cocoa-soft"
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
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-brand dark:text-petal">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin
                size={18}
                className="mt-1 flex-shrink-0 text-brand/70 dark:text-cocoa-soft"
              />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">
                Northstar avenue
                <br />
                Swindon SN2 1FQ
                <br />
                United Kingdom
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone
                size={18}
                className="flex-shrink-0 text-brand/70 dark:text-cocoa-soft"
              />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">
                +447462189184
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail
                size={18}
                className="flex-shrink-0 text-brand/70 dark:text-cocoa-soft"
              />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">
                info@coreshade.co.uk
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-brand/10 px-6 pt-8 md:flex-row md:px-12 lg:px-16 dark:border-petal/10">
        <p className="text-center md:text-left text-xs text-brand/55 dark:text-cocoa">
          Copyright {currentYear} Coreshade Installation. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            to="#"
            className="text-xs text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="text-xs text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
