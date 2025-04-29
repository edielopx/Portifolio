import { useState, useContext } from "react";
import LanguageToggle from "./LanguageToggle";
import SimpleThemeToggle from "./SimpleThemeToggle";
import { useLanguage } from "@/hooks/use-language";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  // Usando o contexto diretamente para evitar dependências circulares
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.isDark || false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full shadow-md z-50 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center text-xl font-bold">
            <span className="text-primary">Portfolio</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a 
              href="#home" 
              className={`relative ${isDark ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.home')}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            <motion.a 
              href="#skills" 
              className={`relative ${isDark ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.skills')}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <motion.a 
              href="#projects" 
              className={`relative ${isDark ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.projects')}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <motion.a 
              href="#contact" 
              className={`relative ${isDark ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.contact')}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </nav>
          
          {/* Language and Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <SimpleThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden hover:text-primary focus:outline-none ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            <motion.a 
              href="#home" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2"
              onClick={closeMenu}
              whileHover={{ backgroundColor: isDark ? "#374151" : "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.home')}
            </motion.a>

            <motion.a 
              href="#skills" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2"
              onClick={closeMenu}
              whileHover={{ backgroundColor: isDark ? "#374151" : "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.skills')}
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2"
              onClick={closeMenu}
              whileHover={{ backgroundColor: isDark ? "#374151" : "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.projects')}
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2"
              onClick={closeMenu}
              whileHover={{ backgroundColor: isDark ? "#374151" : "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.contact')}
            </motion.a>

          </div>
        </div>
      </div>
    </header>
  );
}
