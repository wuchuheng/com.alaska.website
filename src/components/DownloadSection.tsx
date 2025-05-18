import { useLanguage } from '../config/LanguageContext';
import { downloadUrl } from './HeroSection';
import { DownloadIcon } from './Icons';

export const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 bg-primary-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t('header.download')}
        </h2>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-6">
              <DownloadIcon className="h-12 w-12 text-primary-600 dark:text-primary-300" />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Alaska v1.0.0
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              {t('hero.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
              <a
                href={downloadUrl}
                className="flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 3a1 1 0 10-2 0v1.586l-2.293-2.293a1 1 0 00-1.414 1.414L7.586 6H3a1 1 0 000 2h4.586l-2.293 2.293a1 1 0 101.414 1.414L9 9.414l2.293 2.293a1 1 0 001.414-1.414L10.414 8H15a1 1 0 100-2h-4.586l2.293-2.293a1 1 0 00-1.414-1.414L9 4.586V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Windows
              </a>

              <a
                href="#"
                className="flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5c0 .526-.27.988-.659 1.256a6.012 6.012 0 01-2.706 1.912c-.205.624-.664 1.08-1.266 1.256a6.012 6.012 0 01-1.256 2.706c.35.599.482 1.082.659 1.256.985.574 2.033 1.079 3.13 1.41.399-.399.752-.895.908-1.41a6.012 6.012 0 014.271-1.256c.586-.398 1.034-.878 1.256-1.415a6.012 6.012 0 011.912-2.706C17.27 10.988 17 10.526 17 10c0-.526.27-.988.659-1.256a6.012 6.012 0 01-1.912-2.706C15.27 5.988 15 5.526 15 5c0-.526.27-.988.659-1.256a6.012 6.012 0 01-1.912-2.706C12.766.908 11.416.332 10 .332c-1.416 0-2.766.576-3.747 1.656a6.012 6.012 0 01-1.912 2.706C3.99 5.012 4 5.474 4 6c0 .526-.01.988-.339 1.256-.33.339-.73.673-1.329 1.001v-.23z"
                    clipRule="evenodd"
                  />
                </svg>
                macOS (Unsupported)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
