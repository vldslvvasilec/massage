import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';

// Инициализация i18next
i18n
  .use(HttpApi) // Использование HttpApi для загрузки переводов
  .use(initReactI18next)
  .init({
    backend: {
      // Укажите путь к вашим файлам локалей
      loadPath: '/locales/{{lng}}.json',
    },
    lng: Cookies.get('language') || 'en', // Установка языка из куки или по умолчанию 'en'
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
