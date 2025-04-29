import React, { createContext, useState, useEffect, ReactNode } from 'react';

// English translations
const enTranslations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    firstName: 'Edielo',
    lastName: 'Alves Paixão',
    fullName: 'Edielo Alves Paixão',
    title: 'Software Developer',
    tagline: 'Specialized in creating beautiful, usable, and professional websites using modern technologies.',
    contactBtn: 'Get in Touch',
    projectsBtn: 'View Projects',
    profileImage: 'Profile Image'
  },
  about: {
    title: 'About Me',
    subtitle: 'Who I Am',
    description: 'Hello! I\'m a passionate software developer building web applications and digital experiences that people love. I specialize in front-end development, creating responsive and accessible user interfaces.',
    location: 'Espírito Santo, Brazil',
    email: 'edielopx@gmail.com',
    education: 'Software Developer',
    downloadCV: 'Download CV',
    workingImage: 'Working at desk'
  },
  skills: {
    title: 'My Skills',
    description: 'I\'ve worked with a variety of technologies throughout my career. Here are some of my technical skills and areas of expertise.',
    technicalTitle: 'Technical Skills',
    professionalTitle: 'Professional Skills'
  },
  projects: {
    title: 'Recent Projects',
    description: 'Take a look at some of the projects I\'ve worked on recently. Each project represents unique challenges and solutions.',
    viewButton: 'View Project',
    viewAllButton: 'View All Projects'
  },
  contact: {
    title: 'Get In Touch',
    description: 'Feel free to contact me for any work or suggestions. I\'ll get back to you as soon as possible.',
    infoTitle: 'Contact Information',
    formTitle: 'Send a Message',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    social: 'Social Media',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Your email',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message',
    submitButton: 'Send Message',
    sending: 'Sending...',
    successTitle: 'Message Sent',
    successMessage: 'Thank you for your message! I will get back to you soon.',
    errorTitle: 'Error',
    errorMessage: 'Please fill in all required fields.',
    errorSubmission: 'There was an error sending your message. Please try again.'
  },
  footer: {
    tagline: 'Creating beautiful digital experiences is my passion. Let\'s work together to bring your ideas to life.',
    copyright: 'All Rights Reserved'
  }
};

// Portuguese translations
const ptTranslations = {
  nav: {
    home: 'INÍCIO',
    about: 'SOBRE',
    skills: 'HABILIDADES',
    projects: 'PROJETOS',
    contact: 'CONTATO'
  },
  hero: {
    firstName: 'Edielo',
    lastName: 'Alves Paixão',
    fullName: 'Edielo Alves Paixão',
    title: 'Desenvolvedor de Software',
    tagline: 'Especializado em criar sites bonitos, usáveis e profissionais utilizando tecnologias modernas.',
    contactBtn: 'Entre em Contato',
    projectsBtn: 'Ver Projetos',
    profileImage: 'Imagem de Perfil'
  },
  about: {
    title: 'SOBRE',
    subtitle: 'Quem Sou Eu',
    description: 'Olá! Sou um desenvolvedor de software apaixonado construindo aplicações web e experiências digitais que as pessoas adoram. Sou especializado em desenvolvimento front-end, criando interfaces responsivas e acessíveis.',
    location: 'Espírito Santo, Brasil',
    email: 'edielopx@gmail.com',
    education: 'Desenvolvedor de Software',
    downloadCV: 'Baixar Currículo',
    workingImage: 'Trabalhando na mesa'
  },
  skills: {
    title: 'HABILIDADES',
    description: 'Trabalhei com uma variedade de tecnologias ao longo da minha carreira. Aqui estão algumas das minhas habilidades técnicas e áreas de especialização.',
    technicalTitle: 'Habilidades Técnicas',
    professionalTitle: 'Habilidades Profissionais'
  },
  projects: {
    title: 'PROJETOS',
    description: 'Confira alguns dos projetos em que trabalhei recentemente. Cada projeto representa desafios e soluções únicas.',
    viewButton: 'Ver Projeto',
    viewAllButton: 'Ver Todos os Projetos'
  },
  contact: {
    title: 'CONTATO',
    description: 'Sinta-se à vontade para me contatar para qualquer trabalho ou sugestão. Responderei o mais rápido possível.',
    infoTitle: 'Informações de Contato',
    formTitle: 'Envie uma Mensagem',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    social: 'Redes Sociais',
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'Email',
    emailPlaceholder: 'Seu email',
    subjectLabel: 'Assunto',
    subjectPlaceholder: 'Assunto',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Sua mensagem',
    submitButton: 'Enviar Mensagem',
    sending: 'Enviando...',
    successTitle: 'Mensagem Enviada',
    successMessage: 'Obrigado pela sua mensagem! Entrarei em contato em breve.',
    errorTitle: 'Erro',
    errorMessage: 'Por favor, preencha todos os campos obrigatórios.',
    errorSubmission: 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente.'
  },
  footer: {
    tagline: 'Criar experiências digitais bonitas é minha paixão. Vamos trabalhar juntos para dar vida às suas ideias.',
    copyright: 'Todos os Direitos Reservados'
  }
};

type Language = 'en' | 'pt';
type Translations = typeof enTranslations;

interface LanguageContextProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

const translations = {
  en: enTranslations,
  pt: ptTranslations
};

export const LanguageContext = createContext<LanguageContextProps | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage === 'en' ? 'en' : 'pt'; // Default to 'pt' if not 'en'
  });
  
  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      t,
      translations: translations[currentLanguage]
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
