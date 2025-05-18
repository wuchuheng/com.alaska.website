import { useLanguage } from '../config/LanguageContext';
import { ClockIcon, EmailIcon } from './Icons';
import { QRCode } from './QRCode';

export const ContactSection = () => {
  const { t } = useLanguage();

  // WeChat QR code URL
  const wechatQrCodeUrl = 'https://work.weixin.qq.com/u/vcd8d1649bb69ce239?src=wx&bb=0c6a7012c1';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-md mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {t('contact.message')}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <EmailIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.email')}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">wuchuheng@wuchuheng.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ClockIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.hours')}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {t('contact.hours.value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white mb-6">
                {t('contact.wechat')}
              </h3>
              <div className="flex justify-center">
                <QRCode
                  value={wechatQrCodeUrl}
                  size={200}
                  className="border-4 border-primary-100 dark:border-primary-900 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
