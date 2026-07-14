import React from 'react';
import { motion } from 'framer-motion';

export default function SectionCard({ image, title, desc, linkText, onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-xl overflow-hidden cursor-pointer shadow-xl hover:shadow-petal/20 bg-gray-50 dark:bg-dark border border-gray-100 dark:border-gray-900 transition-all duration-300"
      onClick={onClick}
    >
      <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-105 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col items-start translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-brand text-xs font-semibold tracking-widest uppercase mb-1 drop-shadow-sm">Project Insight</span>
        <h3 className="text-2xl font-serif text-white mb-2 drop-shadow-md">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">{desc}</p>
        {linkText && (
          <span className="text-xs font-bold tracking-widest uppercase text-white border-b border-brand pb-1 group-hover:text-brand transition-colors">
            {linkText}
          </span>
        )}
      </div>
    </motion.div>
  );
}


