import { useLanguage } from "@/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const { currentLanguage } = useLanguage();
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
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção removido conforme solicitado */}
        
        <motion.div 
          className="flex justify-center items-center flex-col"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center mb-10">
              {/* GitHub Information - Centralizado */}
              <div className="text-center max-w-xl">
                <motion.div 
                  className="w-40 h-40 mx-auto mb-8 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <i className="fab fa-github text-8xl text-primary dark:text-gray-200"></i>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">{currentLanguage === 'en' ? 'Visit my GitHub' : 'Visite meu GitHub'}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                  {currentLanguage === 'en' 
                    ? 'Explore my projects and contributions on GitHub. Check out my code and follow my development journey.'
                    : 'Explore meus projetos e contribuições no GitHub. Confira meu código e acompanhe meu desenvolvimento.'}
                </p>
                <motion.a 
                  href="https://github.com/edielopx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-all duration-300 text-lg shadow-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github mr-3"></i>
                  <span>github.com/edielopx</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
