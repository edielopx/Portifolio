import { useTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <motion.button
      onClick={handleToggle}
      className={`relative h-10 w-10 rounded-full flex items-center justify-center p-1 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gray-800' : 'bg-primary/10'
      }`}
      whileTap={{ scale: 0.9 }}
      disabled={isAnimating}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
    >
      <div className="relative w-full h-full">
        {/* Sol */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-yellow-500"
          initial={isDark ? { opacity: 0, y: -20, scale: 0.5 } : { opacity: 1, y: 0, scale: 1 }}
          animate={isDark 
            ? { opacity: 0, y: -20, scale: 0.5 } 
            : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
            animate={{ rotate: isDark ? 0 : 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <path 
              d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.844a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 00-1.061-1.06l-1.59 1.591z" 
            />
          </motion.svg>
        </motion.div>
        
        {/* Lua */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-gray-300"
          initial={!isDark ? { opacity: 0, y: 20, scale: 0.5 } : { opacity: 1, y: 0, scale: 1 }}
          animate={!isDark 
            ? { opacity: 0, y: 20, scale: 0.5 } 
            : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
            animate={{ rotate: !isDark ? 0 : 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <path 
              fillRule="evenodd" 
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" 
              clipRule="evenodd" 
            />
          </motion.svg>
        </motion.div>
      </div>
      
      {/* Efeito de ondulação ao clicar */}
      {isAnimating && (
        <motion.div
          className={`absolute rounded-full ${isDark ? 'bg-gray-900' : 'bg-yellow-400'}`}
          initial={{ width: 0, height: 0, opacity: 0.7 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      )}
    </motion.button>
  );
}