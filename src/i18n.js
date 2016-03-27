import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';


i18n
    .use(XHR)
    .init({
        lng: "ru",
        backend: {
            loadPath: '/dist/locales/{{lng}}/{{ns}}.json'
        },

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'eng',

        debug: false,

        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });


export default i18n;