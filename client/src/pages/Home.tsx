import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // Set title and description for SEO
    document.title = "Edielo Alves Paixão | Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating GitHub Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.a 
          href="https://github.com/edielopx" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-primary dark:bg-gray-700 hover:bg-secondary dark:hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
          title="GitHub"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, -10, 0],
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github text-white"></i>
        </motion.a>
      </motion.div>
    </div>
  );
}
