"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface FABProps {
  onClick?: () => void;
  isOpen?: boolean;
}

export default function FAB({ onClick, isOpen = false }: FABProps) {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipLabel = useMemo(
    () => (isOpen ? "Close NectarAI Assistant" : "Chat with NectarAI"),
    [isOpen]
  );

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 group cursor-pointer"
      aria-label={tooltipLabel}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#1d4ed8", // darker blue
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {/* Animated Chat Icon */}
      <motion.svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        animate={isHovered ? {
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0]
        } : { scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          animate={isHovered ? {
            scale: [1, 1.05, 1],
          } : { scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
        />
        {/* Animated typing dots */}
        <motion.circle
          cx="9"
          cy="12"
          r="1"
          fill="currentColor"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.7, 1]
          } : { scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          fill="currentColor"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.7, 1]
          } : { scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        <motion.circle
          cx="15"
          cy="12"
          r="1"
          fill="currentColor"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.7, 1]
          } : { scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
      </motion.svg>

      {/* NectarAI Text */}
      <motion.span
        className="text-sm font-medium"
        animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        NectarAI
      </motion.span>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 10
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        {tooltipLabel}
        {/* Arrow */}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </motion.div>
    </motion.button>
  );
}
