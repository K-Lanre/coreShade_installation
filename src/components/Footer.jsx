import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Our Story', path: '/about' },
  { name: 'Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 bg-[#f3d8e2] pt-16 pb-8 transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Coreshade Installation logo"
              className="h-12 w-12 object-contain shrink-0"
            />
            <h2 className="text-2xl font-serif tracking-widest uppercase text-brand dark:text-cocoa-soft leading-tight">
              Coreshade <span className="font-light text-brand dark:text-cocoa-soft">Installation</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand/70 dark:text-cocoa-soft">
            Commercial interior fit-out specialists. Transforming interior spaces through expert design, specialist blind supply, professional installation, and complete fit-out solutions.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-brand dark:text-petal">Explore</h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative inline-flex pb-1 text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-brand dark:text-petal'
                        : 'text-brand/70 hover:text-brand dark:text-cocoa-soft dark:hover:text-cocoa-soft'
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
                            transition={{ duration: 0.24, ease: 'easeInOut' }}
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
          <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-brand dark:text-petal">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-brand/70 dark:text-cocoa-soft" />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">86-90 Paul Street, London EC2A 4NE<br/>United Kingdom</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0 text-brand/70 dark:text-cocoa-soft" />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">+234 803 268 7681</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0 text-brand/70 dark:text-cocoa-soft" />
              <span className="text-sm text-brand/70 dark:text-cocoa-soft">inquiries@coreshade.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 border-t border-brand/10 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-petal/10">
        <p className="text-center md:text-left text-xs text-brand/55 dark:text-cocoa">
          Copyright {currentYear} Coreshade Installation. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="text-xs text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft">Privacy Policy</Link>
          <Link to="#" className="text-xs text-brand/55 transition-colors hover:text-brand dark:text-cocoa dark:hover:text-cocoa-soft">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

