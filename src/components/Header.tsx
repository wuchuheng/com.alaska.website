import { useEffect, useState } from 'react';
import logo from '../../public/logo.png';
import { useLanguage } from '../config/LanguageContext';
import { useTheme } from '../config/ThemeContext';
import { LanguageIcon, MoonIcon, SunIcon } from './Icons';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Handle language toggle
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  // 3. Navigation items
  const navItems = [
    { key: 'features', label: t('header.features'), href: '#features' },
    { key: 'how', label: t('header.how'), href: '#how-it-works' },
    { key: 'contact', label: t('header.contact'), href: '#contact' },
    { key: 'download', label: t('header.download'), href: '#download' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Alaska" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-primary-500 dark:text-primary-400">
              {t('hero.title')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="text-yellow-400" />
              ) : (
                <MoonIcon className="text-gray-700" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <LanguageIcon className="text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium">{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 p-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <SunIcon className="text-yellow-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {language === 'zh' ? '亮色模式' : 'Light Mode'}
                    </span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="text-gray-700" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {language === 'zh' ? '暗色模式' : 'Dark Mode'}
                    </span>
                  </>
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 p-2"
                aria-label="Toggle language"
              >
                <LanguageIcon className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">
                  {language === 'zh' ? 'English' : '中文'}
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
