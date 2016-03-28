import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

i18n
    .use(XHR)
    .init({
        lng: "eng   ",
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

const initialState = {
    i18n: i18n,
    languages: ["eng", "ru"],
    current: ["eng"]
};

export default function i18nState(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'CHANGE':
            console.log(action.payload);
            newState.i18n.changeLanguage(action.payload, (err, t) => {
                if(err) {
                    console.log("Some error with i18n");
                }
            });
            return newState;

        default:
            return newState;
    }
};
