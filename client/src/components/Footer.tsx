import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="./assets/profile.jpg" 
                alt="Edielo Alves Paixão" 
                className="w-10 h-10 mr-3 rounded-full border-2 border-primary dark:border-gray-600"
              />
            </div>
            <p className="mt-2 text-gray-400 max-w-md font-medium">
              Todos os direitos reservados a Edielo Alves Paixão
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">&copy; {currentYear}</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/edielo-alves-paixão-a23a55300/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary dark:hover:text-gray-200 transition-colors duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/edielopx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary dark:hover:text-gray-200 transition-colors duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
