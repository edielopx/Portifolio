import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // Tenta obter o tema salvo do localStorage
      const savedTheme = localStorage.getItem('theme') as Theme;
      
      // Verifica se há preferência do usuário por dark mode
      const prefersDark = 
        window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Retorna o tema salvo ou a preferência do sistema
      return savedTheme || (prefersDark ? 'dark' : 'light');
    }
    
    // Padrão para 'light' se estivermos no servidor
    return 'light';
  });
  
  // Efeito para atualizar a classe no elemento HTML quando o tema mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Salva o tema no localStorage
      localStorage.setItem('theme', theme);
      
      // Atualiza a classe no elemento HTML
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);
  
  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider 
      value={{
        theme,
        toggleTheme,
        isDark: theme === 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};