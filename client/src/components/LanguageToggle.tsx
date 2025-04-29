import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-4">
      <motion.button 
        data-lang="en" 
        onClick={() => setLanguage('en')}
        className={`text-sm font-medium transition-colors duration-300 ${currentLanguage === 'en' ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: currentLanguage === 'en' ? [0, -2, 0] : 0 
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        EN
      </motion.button>
      <span className="text-gray-300">|</span>
      <motion.button 
        data-lang="pt" 
        onClick={() => setLanguage('pt')}
        className={`text-sm font-medium transition-colors duration-300 ${currentLanguage === 'pt' ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: currentLanguage === 'pt' ? [0, -2, 0] : 0 
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        PT
      </motion.button>
    </div>
  );
}
