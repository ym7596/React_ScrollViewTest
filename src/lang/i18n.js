import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

 
import langEn from './lang.en.json';
import langKo from './lang.ko.json';
 
const resources = {
    en: {
        translations: langEn
    },
    ko: {
        translations: langKo
    }
}
 
i18n
    .use(initReactI18next)
    .init({
    	// 이부분 오타 수정
        resources: resources,
        // 초기 설정 언어
        lng: 'ko',
        fallbackLng: 'ko',
        debug: true,
        defaultNS: 'translations',
        ns: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })
 
export default i18n;