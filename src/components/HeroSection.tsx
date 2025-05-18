import { useLanguage } from '../config/LanguageContext';
import { DownloadIcon } from './Icons';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-6">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
            >
              <DownloadIcon className="mr-2" />
              {t('hero.cta')}
            </a>
          </div>
          <div className="md:w-1/2">
            {/* Animation of multiple browser windows extracting data */}
            <div className="relative h-80 w-full">
              {/* Main browser window */}
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 z-10 transform transition-transform hover:scale-105">
                <div className="h-6 flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
                  ))}
                </div>
              </div>

              {/* Second browser window */}
              <div className="absolute top-10 right-0 w-3/5 h-3/5 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 z-20 transform transition-transform hover:scale-105">
                <div className="h-5 flex items-center space-x-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="h-6 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
                  ))}
                </div>
              </div>

              {/* Excel file */}
              <div className="absolute bottom-0 right-10 w-2/5 h-2/5 bg-green-100 dark:bg-green-900 rounded-lg shadow-xl p-3 z-30 transform transition-transform hover:scale-105">
                <div className="h-full flex flex-col">
                  <div className="h-6 bg-green-200 dark:bg-green-800 rounded mb-2"></div>
                  <div className="flex-1 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="h-5 bg-white dark:bg-gray-700 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
