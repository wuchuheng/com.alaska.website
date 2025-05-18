import { createContext, ReactNode, useContext, useState } from 'react';

export type Language = 'zh' | 'en';

type Translations = {
  [key: string]: {
    zh: string;
    en: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Initial translations
const translations: Translations = {
  // Header
  'header.contact': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'header.features': {
    zh: '功能特点',
    en: 'Features',
  },
  'header.how': {
    zh: '工作原理',
    en: 'How It Works',
  },
  'header.download': {
    zh: '下载',
    en: 'Download',
  },

  // Hero section
  'hero.title': {
    zh: '阿拉斯佳',
    en: 'Alaska',
  },
  'hero.subtitle': {
    zh: '高效的电商信息提取工具',
    en: 'Efficient E-commerce Data Extraction Tool',
  },
  'hero.description': {
    zh: '快速从电商平台提取商品信息，批量处理数据，并导出为Excel格式',
    en: 'Quickly extract product information from e-commerce platforms, process data in bulk, and export to Excel format',
  },
  'hero.cta': {
    zh: '立即下载',
    en: 'Download Now',
  },

  // Contact section
  'contact.title': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'contact.email': {
    zh: '邮箱',
    en: 'Email',
  },
  'contact.hours': {
    zh: '工作时间',
    en: 'Working Hours',
  },
  'contact.hours.value': {
    zh: '9:00 - 18:00',
    en: '9:00 AM - 6:00 PM',
  },
  'contact.message': {
    zh: '如有任何疑问，请随时与我们联系，我们将竭诚为您服务！',
    en: 'If you have any questions, please feel free to contact us, we will do our best to serve you!',
  },
  'contact.wechat': {
    zh: '微信联系',
    en: 'WeChat Contact',
  },

  // How it works section
  'how.title': {
    zh: '工作原理',
    en: 'How It Works',
  },
  'how.step1.title': {
    zh: '设置关键词',
    en: 'Set Keywords',
  },
  'how.step1.desc': {
    zh: '预设多个搜索关键词，系统会智能防止重复搜索',
    en: 'Preset multiple search keywords, the system will intelligently prevent duplicate searches',
  },
  'how.step2.title': {
    zh: '多实例并行处理',
    en: 'Multi-instance Parallel Processing',
  },
  'how.step2.desc': {
    zh: '创建多个浏览器实例同时工作，大幅提高数据提取效率',
    en: 'Create multiple browser instances working simultaneously to greatly improve data extraction efficiency',
  },
  'how.step3.title': {
    zh: '智能数据分析',
    en: 'Intelligent Data Analysis',
  },
  'how.step3.desc': {
    zh: '分析商品发货城市、价格、品牌和价格范围等信息',
    en: 'Analyze product shipping city, price, brand and price range information',
  },
  'how.step4.title': {
    zh: '导出数据',
    en: 'Export Data',
  },
  'how.step4.desc': {
    zh: '将符合条件的数据导出为Excel文件，方便后续处理',
    en: 'Export qualified data as Excel files for easy subsequent processing',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 1. Input handling - Get language from localStorage or default to Chinese
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'zh';
  });

  // 2. Core processing - Set language and update localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // 3. Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
