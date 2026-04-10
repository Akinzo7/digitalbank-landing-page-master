"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] bg-gradient-to-b from-primary-darkBlue/80 to-transparent z-40 lg:hidden"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed left-6 right-6 top-[80px] bg-white rounded flex flex-col items-center py-6 shadow-xl z-50 lg:hidden"
          >
            {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 text-primary-darkBlue hover:text-primary-limeGreen transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
