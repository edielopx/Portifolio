import { useLanguage } from "@/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SOBRE</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            variants={itemVariants}
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full object-cover bg-gray-100"
              >
                <rect width="400" height="400" fill="#f3f4f6" />
                <text x="50%" y="50%" fontSize="16" textAnchor="middle" dy=".3em" fill="#6b7280">
                  {t('about.workingImage')}
                </text>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('about.subtitle')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{t('about.description')}</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="text-gray-600">{t('about.location')}</p>
              </div>
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <p className="text-gray-600">{t('about.email')}</p>
              </div>
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <p className="text-gray-600">{t('about.education')}</p>
              </div>
            </div>
            
            <a 
              href="https://github.com/edielopx" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
