import { useLanguage } from '../config/LanguageContext';

export const FeaturesSection = () => {
  const { t, language } = useLanguage();

  // Feature translations
  const features = [
    {
      title: {
        zh: '多浏览器实例并行',
        en: 'Multiple Browser Instances',
      },
      description: {
        zh: '同时创建多个浏览器实例，大幅提升数据提取效率',
        en: 'Create multiple browser instances working simultaneously for maximum efficiency',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      title: {
        zh: '智能去重',
        en: 'Smart Deduplication',
      },
      description: {
        zh: '智能防止重复搜索和提取，节省时间和资源',
        en: 'Intelligently prevent duplicate searches and extractions, saving time and resources',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: {
        zh: '批量关键词搜索',
        en: 'Batch Keyword Search',
      },
      description: {
        zh: '预设多个搜索关键词，自动批量处理',
        en: 'Preset multiple search keywords for automatic batch processing',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: {
        zh: '数据分析',
        en: 'Data Analysis',
      },
      description: {
        zh: '自动分析商品发货城市、价格范围、品牌等信息',
        en: 'Auto-analyze product shipping city, price range, brand information and more',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      title: {
        zh: '便捷导出',
        en: 'Easy Export',
      },
      description: {
        zh: '一键导出为Excel文件，方便后续数据处理',
        en: 'One-click export to Excel files for convenient data processing',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: {
        zh: '简洁界面',
        en: 'Clean Interface',
      },
      description: {
        zh: '直观易用的界面设计，零学习成本',
        en: 'Intuitive and easy-to-use interface design with zero learning curve',
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('header.features')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title[language]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
