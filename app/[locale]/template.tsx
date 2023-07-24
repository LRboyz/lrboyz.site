'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
    >
      {children}
    </motion.div>
  );
}
