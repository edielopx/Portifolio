import { useLanguage } from "@/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="pt-32 pb-24 md:pt-40 md:pb-32 dark:bg-gray-900 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              <span className="block text-primary dark:text-gray-200">{t('hero.fullName')}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">{t('hero.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">{t('hero.tagline')}</p>
            <div className="flex flex-wrap gap-4">

              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-gray-200 font-medium rounded-lg transition-all duration-300 border border-primary dark:border-gray-600 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.projectsBtn')}
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut" 
              }}
            >
              <img 
                src="./assets/profile.jpg"
                alt="Profile Image" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 flex justify-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/edielo-alves-paixão-a23a55300/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 shadow-lg border-2 border-blue-600 dark:border-blue-500"
            whileHover={{ 
              scale: 1.15, 
              rotate: 5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin-in text-3xl"></i>
          </motion.a>
          <motion.a 
            href="https://github.com/edielopx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg border-2 border-gray-800 dark:border-gray-600"
            whileHover={{ 
              scale: 1.15, 
              rotate: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github text-3xl"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
