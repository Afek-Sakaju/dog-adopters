import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n.use(initReactI18next)
    .use(
        resourcesToBackend((language, namespace) =>
            import(`@data/locales/${language}/${namespace}.json`)
        )
    )
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['querystring', 'localStorage'],
            lookupQuerystring: 'lng',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
            excludeCacheFor: ['cimode'],
        },
    });

export default i18n;
export { useTranslation } from 'react-i18next';
export const { changeLanguage, t: translate } = i18n;
