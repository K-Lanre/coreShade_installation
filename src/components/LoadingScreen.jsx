import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-petal dark:bg-brand"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,206,219,0.65),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(122,62,48,0.35),transparent_42%)]" />

      <div className="relative flex w-full max-w-md flex-col items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Coreshade Installation logo"
            className="h-16 w-auto object-contain dark:hidden sm:h-20"
          />
          <img
            src="/logodark.png"
            alt="Coreshade Installation logo"
            className="hidden h-16 w-auto object-contain dark:block sm:h-20"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-brand/65 dark:text-cocoa-soft"
        >
          Preparing Your Experience
        </motion.p>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand/10 dark:bg-petal/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="h-full rounded-full bg-brand dark:bg-petal"
          />
        </div>

        <motion.div
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-5 text-xs tracking-[0.28em] text-brand/45 dark:text-cocoa"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  );
}
