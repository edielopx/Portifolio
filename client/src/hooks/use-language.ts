import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

// Fallback values for when context is not available
const fallbackValues = {
  currentLanguage: 'pt' as const,
  setLanguage: () => {}, // no-op function
  t: (key: string) => key, // Return the key itself as fallback
  translations: {}
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // Return context if available, otherwise return fallback
  return context || fallbackValues;
}
