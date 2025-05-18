import { useLanguage } from '../config/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/logo.png" alt="Alaska" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold text-primary-500">{t('hero.title')}</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Alaska. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
