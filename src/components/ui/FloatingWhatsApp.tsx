import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5531989690748"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-black text-xs font-medium px-3 py-1.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
    </motion.a>
  );
};
