const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  initImmediate: false,
  otherLanguages: ['kr'], // ['de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localePath: 'public/locales',
  localeSubpaths: {
    en: 'en',
    kr: 'kr',
    // ar: 'ar',
    // de: 'de',
    // id: 'id',
    // pt: 'pt',
    // zh: 'zh',
  },
});
