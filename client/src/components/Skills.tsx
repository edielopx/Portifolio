import { useLanguage } from "@/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const { t, currentLanguage } = useLanguage();
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

  const technicalSkills = currentLanguage === 'en' 
    ? [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "Python", percentage: 75 }
      ]
    : [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "Python", percentage: 75 }
      ];
  
  const professionalSkills = currentLanguage === 'en'
    ? [
        { 
          name: "Web Development", 
          description: "Creating responsive, user-friendly web applications",
          icon: "fa-laptop-code",
          bgColor: "bg-blue-100",
          iconColor: "text-primary"
        },
        { 
          name: "UI/UX Design", 
          description: "Designing intuitive and aesthetically pleasing interfaces",
          icon: "fa-paint-brush",
          bgColor: "bg-green-100",
          iconColor: "text-accent"
        },
        { 
          name: "Project Management", 
          description: "Leading teams to deliver successful projects",
          icon: "fa-project-diagram",
          bgColor: "bg-yellow-100",
          iconColor: "text-yellow-500"
        },
        { 
          name: "Problem Solving", 
          description: "Finding elegant solutions to complex problems",
          icon: "fa-code-branch",
          bgColor: "bg-purple-100",
          iconColor: "text-purple-500"
        }
      ]
    : [
        { 
          name: "Desenvolvimento Web", 
          description: "Criação de aplicações web responsivas e amigáveis",
          icon: "fa-laptop-code",
          bgColor: "bg-blue-100",
          iconColor: "text-primary"
        },
        { 
          name: "Design UI/UX", 
          description: "Design de interfaces intuitivas e esteticamente agradáveis",
          icon: "fa-paint-brush",
          bgColor: "bg-green-100",
          iconColor: "text-accent"
        },
        { 
          name: "Gestão de Projetos", 
          description: "Liderança de equipes para entregar projetos de sucesso",
          icon: "fa-project-diagram",
          bgColor: "bg-yellow-100",
          iconColor: "text-yellow-500"
        },
        { 
          name: "Resolução de Problemas", 
          description: "Encontrando soluções elegantes para problemas complexos",
          icon: "fa-code-branch",
          bgColor: "bg-purple-100",
          iconColor: "text-purple-500"
        }
      ];

  const darkModeSkills = professionalSkills.map(skill => {
    // Adaptar cores para o modo escuro
    let darkBgColor = skill.bgColor.replace('bg-blue-100', 'dark:bg-blue-900')
      .replace('bg-green-100', 'dark:bg-green-900')
      .replace('bg-yellow-100', 'dark:bg-yellow-900')
      .replace('bg-purple-100', 'dark:bg-purple-900');
    
    return {
      ...skill,
      bgColor: `${skill.bgColor} ${darkBgColor}`
    };
  });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">HABILIDADES</h2>
          <div className="w-20 h-1 bg-primary dark:bg-gray-200 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{t('skills.technicalTitle')}</h3>
            
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="mb-5"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="progress-bar dark:bg-gray-700">
                  <motion.div 
                    className="progress-fill"
                    style={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ 
                      scale: [1, 1.02, 1],
                      transition: { duration: 0.6, repeat: Infinity }
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{t('skills.professionalTitle')}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {darkModeSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  variants={itemVariants}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-full ${skill.bgColor} flex items-center justify-center mb-4`}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`fas ${skill.icon} ${skill.iconColor} text-2xl`}></i>
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
