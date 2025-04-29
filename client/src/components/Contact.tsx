import { useLanguage } from "@/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">CONTATO</h2>
          <div className="w-20 h-1 bg-primary dark:bg-gray-200 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg dark:shadow-gray-900"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <motion.div 
                  className="h-24 w-24 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-lg mb-4 mx-auto"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#3B82F6"
                  }}
                >
                  <img 
                    src="./assets/profile.jpg" 
                    alt="Edielo Alves Paixão" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 text-center">Edielo Alves Paixão</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {/* Email */}
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="bg-gray-100 dark:bg-gray-700 h-20 w-20 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-envelope text-primary dark:text-gray-300 text-3xl"></i>
                  </motion.div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">Email</h3>
                  <p className="text-lg font-medium dark:text-gray-200">edielopx@gmail.com</p>
                </motion.div>
                
                {/* Telefone */}
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="bg-gray-100 dark:bg-gray-700 h-20 w-20 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-phone text-primary dark:text-gray-300 text-3xl"></i>
                  </motion.div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">Telefone</h3>
                  <p className="text-lg font-medium dark:text-gray-200">(27) 99782-1874</p>
                </motion.div>
              </div>
              
              {/* Redes Sociais */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 w-full">
                <h3 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-6">Redes Sociais</h3>
                <div className="flex justify-center space-x-6">
                  <motion.a 
                    href="https://www.linkedin.com/in/edielo-alves-paixão-a23a55300/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </motion.a>
                  <motion.a 
                    href="https://github.com/edielopx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-github text-xl"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
